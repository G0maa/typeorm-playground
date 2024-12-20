// This file is strictly used by CLI.
import { config } from 'dotenv';
config({ debug: true });

import { DataSource, DataSourceOptions } from 'typeorm';

const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  logging: ['error'],
  migrations: [__dirname + '/src/datasources/*{.ts,.js}'],
  migrationsTableName: 'db_migrations',
};

export default new DataSource(databaseConfig);
