import { Router } from 'express';
import User from '../../models/userModel.js';


const router = Router();

/////////////// FETCH ALL //////////////
router.get('/users', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'firstname',
        'lastname',
        'email',
        'password',
      ],
    });
    console.log('this is what happens in route', users)
    res.json(users);
  } catch (err) {
    next(err);
  }
});


/////////////// FETCH SINGLE //////////////

// router.get('/users/:userId', async (req, res, next) => {
//   const userId = req.params.userId;
//   try {
//     const user = await User.findOne({
//       where: { id: userId },
//     });
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).send({ message: 'User not found' });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/users/:id', async (req, res, next) => {
//   try {
//     const user = await User.findByPk(req.params.id, {
//     });
//     res.json({ user });
//   } catch (err) {
//     next(err);
//   }
// });

// router.get('/users/:userId', async (req, res, next) => {
//   const userId = req.params.userId;
//   try {
//     const user = await User.findByPk(userId);
//     res.send(user);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/users/:id', async (req, res, next) => {
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


export default router;
