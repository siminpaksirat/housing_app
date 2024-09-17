// import { Router } from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../../models/userModel.js';
// import dotenv from 'dotenv';
// dotenv.config();

// const router = Router();






// const users = [];


// /////////////// LOGIN //////////////
// router.post('/me', async (req, res) => {
//     const { email, password } = req.body;


//     const userWithEmail = await User.findOne({where: {email}}).catch(
//       (err)=> {
//         console.log('Error:',err)
//       }
//     )
//     // Simple validation
//     if (!userWithEmail) {
//       return res.status(400).json({ message: 'Please provide both email and password.' });
//     }

//     // Find the user
//     const user = User.findOne(user => user.email === email);
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials.' });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials.' });
//     }

//     // Create a JWT token
// const jwtToken = jwt.sign(
//   {id: userWithEmail.id, email: userWithEmail.email},
//   process.env.JWT_SECRET_KEY
// )
// res.json({message: 'welcome back', token: jwtToken})


//     // const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });

//     // res.json({ token });
//   });
// //////////////////////////////////////////////////////////////////////



// /////////////// SIGNUP //////////////
// router.post('/signup', async (req, res) => {
//     const { email, password } = req.body;

//     // Simple validation
//     if (!email || !password) {
//       return res.status(400).json({ message: 'Please provide both email and password.' });
//     }

//     // Check if the user already exists
//     const userExists = User.findOne(user => user.email === email);
//     if (userExists) {
//       return res.status(400).json({ message: 'User already exists.' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Save the new user
//     users.push({ email, password: hashedPassword });

//     res.status(201).json({ message: 'User registered successfully.' });
//   });
// //////////////////////////////////////////////////////////////////////


// /////////////// PROFILE //////////////
// // router.get('/profile', authenticateToken, (req, res) => {
// //     res.json({ message: 'Welcome to your profile!', user: req.user });
// //   });

// //   // Middleware to authenticate JWT tokens
// //   function authenticateToken(req, res, next) {
// //     const authHeader = req.headers['authorization'];
// //     const token = authHeader && authHeader.split(' ')[1];

// //     if (!token) return res.sendStatus(401);

// //     jwt.verify(token, JWT_SECRET, (err, user) => {
// //       if (err) return res.sendStatus(403);
// //       req.user = user;
// //       next();
// //     });
// //   }

//   module.exports = router;
