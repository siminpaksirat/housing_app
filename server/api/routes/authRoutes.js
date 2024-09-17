import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../models/userModel.js';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();


router.post('/login', async (req, res, next) => {
    try {
      res.send({ token: await User.authenticate(req.body) });
    } catch (err) {
      next(err);
    }
  });

  router.post('/signup', async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      res.send({ token: await user.generateToken() });
    } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists');
      } else {
        next(err);
      }
    }
  });

  router.get('/me', async (req, res, next) => {
    try {
      res.send(await User.findByToken(req.headers.authorization));
    } catch (ex) {
      next(ex);
    }
  });

  export default router;
