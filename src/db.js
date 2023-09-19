import dotenv from 'dotenv/config';
import { Sequelize } from 'sequelize';
import UserModel from './models/User.js';
import PostModel from './models/Post.js';

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countriesv2`,
  { logging: false }
);

UserModel(sequelize);
PostModel(sequelize);

const { User, Post } = sequelize.models;

User.hasMany(Post);
Post.belongsTo(User);

export { sequelize, User, Post };
