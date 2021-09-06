import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1630955695165 implements MigrationInterface {
  name = 'initial1630955695165';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tags" ("id" SERIAL NOT NULL, "tagName" character varying NOT NULL, "user_id" integer, CONSTRAINT "UQ_a0e006b29d7876b2f5a4df70a37" UNIQUE ("tagName"), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a0e006b29d7876b2f5a4df70a3" ON "tags" ("tagName") `,
    );
    await queryRunner.query(
      `CREATE TABLE "links" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "url" character varying NOT NULL, "user_id" integer, CONSTRAINT "PK_ecf17f4a741d3c5ba0b4c5ab4b6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5de487d17708b2a8460a17170a" ON "links" ("description") `,
    );
    await queryRunner.query(
      `CREATE TABLE "links_tags_tags" ("linksId" integer NOT NULL, "tagsId" integer NOT NULL, CONSTRAINT "PK_4bebda22d4a1316253da4834ce6" PRIMARY KEY ("linksId", "tagsId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_e73c050308182040b9b83c70d7" ON "links_tags_tags" ("linksId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_c2179d4ffc5f90dee734fc1f98" ON "links_tags_tags" ("tagsId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "tags" ADD CONSTRAINT "FK_74603743868d1e4f4fc2c0225b6" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "links" ADD CONSTRAINT "FK_9f8dea86e48a7216c4f5369c1e4" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "links_tags_tags" ADD CONSTRAINT "FK_e73c050308182040b9b83c70d7a" FOREIGN KEY ("linksId") REFERENCES "links"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "links_tags_tags" ADD CONSTRAINT "FK_c2179d4ffc5f90dee734fc1f98e" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "links_tags_tags" DROP CONSTRAINT "FK_c2179d4ffc5f90dee734fc1f98e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "links_tags_tags" DROP CONSTRAINT "FK_e73c050308182040b9b83c70d7a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "links" DROP CONSTRAINT "FK_9f8dea86e48a7216c4f5369c1e4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "tags" DROP CONSTRAINT "FK_74603743868d1e4f4fc2c0225b6"`,
    );
    await queryRunner.query(`DROP INDEX "IDX_c2179d4ffc5f90dee734fc1f98"`);
    await queryRunner.query(`DROP INDEX "IDX_e73c050308182040b9b83c70d7"`);
    await queryRunner.query(`DROP TABLE "links_tags_tags"`);
    await queryRunner.query(`DROP INDEX "IDX_5de487d17708b2a8460a17170a"`);
    await queryRunner.query(`DROP TABLE "links"`);
    await queryRunner.query(`DROP INDEX "IDX_a0e006b29d7876b2f5a4df70a3"`);
    await queryRunner.query(`DROP TABLE "tags"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
