import { Sequelize, DataTypes } from "sequelize";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  });


  const SALT_ROUNDS = 5;


const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

}, {
  tableName: 'users',
  timestamps: false,
});

sequelize.sync({ alter: true });


export default User;

////////////////// Password //////////////////
// User.prototype.correctPassword = function (candidatePwd) {
//   return bcrypt.compare(candidatePwd, this.password);
// };


// User.prototype.generateToken = function () {
//   console.log(this.id);
//   return jwt.sign({ id: this.id }, process.env.DB_SECRETKEY);
// };

// User.authenticate = async function ({ email, password }) {
//   const user = await this.findOne({ where: { email } });
//   if (!user || !(await user.correctPassword(password))) {
//     const error = Error('Incorrect username/password');
//     error.status = 401;
//     throw error;
//   }

//   return user.generateToken();
// };


// User.findByToken = async function (token) {
//   try {
//     const { id } = await jwt.verify(token, process.env.DB_SECRETKEY);
//     const user = User.findByPk(id);
//     if (!user) {
//       throw 'nooo';
//     }
//     return user;
//   } catch (ex) {
//     const error = Error('bad token');
//     error.status = 401;
//     throw error;
//   }
// };

// const hashPassword = async (user) => {
//   if (user.changed('password')) {
//     user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
//   }
// };

// User.beforeCreate(hashPassword);
// User.beforeUpdate(hashPassword);
// User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));
