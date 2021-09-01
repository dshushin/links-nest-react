import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'linksnest',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
