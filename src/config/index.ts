import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  host: process.env.HOST,
  mode: process.env.NODE_ENV,
  dbName: process.env.POSTGRES_DB,
  dbUser: process.env.POSTGRES_USER,
  dbPassword: process.env.POSTGRES_PASSWORD,
};
