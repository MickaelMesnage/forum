import * as dotenv from 'dotenv';
dotenv.config();

export default {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  type: 'postgresql',
  clientUrl: process.env.MIKRO_CLIENT_URL,
};
