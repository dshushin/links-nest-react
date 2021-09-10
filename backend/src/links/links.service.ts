import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Link } from './entities/link.entity';
import { Repository } from 'typeorm';
import { Tag } from '../tags/entities/tag.entity';
import User from '../users/user.entity';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createLinkDto: CreateLinkDto) {
    // TODO вообще не понимаю как это тут работает
    const tags = await Promise.all(
      createLinkDto.tags.map((tagName) => this.preloadTagByName(tagName)),
    );
    // TODO как сюда передать User / linkOwner???
    const link = this.linkRepository.create({
      ...createLinkDto,
      tags,
    });
    return this.linkRepository.save(link);
  }

  findAll() {
    return this.linkRepository.find({ relations: ['tags'] }); // TODO как ограничить по пользователю??
  }

  async findOne(id: number) {
    const link = await this.linkRepository.findOne(id, { relations: ['tags'] });
    if (!link) {
      throw new NotFoundException(`Link #${id} not found`);
    }
    return link;
  }

  async update(id: number, updateLinkDto: UpdateLinkDto) {
    // TODO вообще не понятно - разобрать с Олегом
    const tags =
      updateLinkDto.tags &&
      (await Promise.all(
        updateLinkDto.tags.map((tagName) => this.preloadTagByName(tagName)),
      ));

    const link = await this.linkRepository.preload({
      id: +id, // TODO что значит + перед id
      ...updateLinkDto,
      tags,
    });
    if (!link) {
      throw new NotFoundException(`Link #${id} not found`);
    }
    return this.linkRepository.save(link);
  }

  async remove(id: number) {
    const link = await this.findOne(id); // TODO почему не из репозитория
    return this.linkRepository.remove(link); // TODO почему delete выдает ошибку
  }

  private async preloadTagByName(tagName: string): Promise<Tag> {
    const existingTag = await this.tagRepository.findOne({ tagName });
    if (existingTag) {
      return existingTag;
    }
    return this.tagRepository.create({ tagName });
  }
}
