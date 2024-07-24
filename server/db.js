import dotenv from 'dotenv';
import pg from 'pg';
import { Sequelize } from 'sequelize';

dotenv.config();

const { Pool } = pg;


const sequelize = new Sequelize('postgres://spak:Pak1990%3F%3F%3F@localhost:5432/housing', {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true, // Disable logging; default: console.log
});


// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})




export default pool;
