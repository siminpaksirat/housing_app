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
router.get('/users/userId', async (req, res, next) => {

  const userId = req.params.user.id
  try {
    const user = await User.findByPk(userId, {
    });
    res.json({ user });
  } catch (err) {
    next(err);
  }
});

/////////////// POST //////////////
router.post('/users', async (req, res, next) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
    })
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});


/////////////// ADD USER //////////////


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
