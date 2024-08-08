// import { Router } from 'express';
// import User from '../../models/userModel';
// const router = Router();

// router.get('/auth', async (req, res, next) => {
//   try {
//     const users = await User.findAll({
//       attributes: [
//         'id',
//         'firstName',
//         'lastName',
//         'email',
//         'password',
//         'userType',
//       ],
//     });
//     res.json(users);
//   } catch (err) {
//     next(err);
//   }
// });

// router.get('/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id, {
//     });
//     res.json({ user });
//   } catch (err) {
//     next(err);
//   }
// });

// router.get('/:userId', async (req, res, next) => {
//   const userId = req.params.userId;
//   try {
//     const user = await User.findByPk(userId);
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/:userId', async (req, res, next) => {
//   const userId = req.params.userId;
//   try {
//     const user = await User.findByPk(userId);
//     if (!user) {
//       return res.status(404).send("User doesn't exits!");
//     }
//     await user.destroy();
//   } catch (error) {
//     next(error);
//   }
// });
