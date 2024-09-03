import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config();


import propertyRoutes from './server/api/routes/propertyRoutes.js';
import usersRoutes from './server/api/routes/usersRoutes.js';
// import authRoutes from './server/api/routes/authRoutes.js'





// import router from './api/index.js';


const PORT = process.env.PORT || 3000;

const app = express()
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));


// Routes /////////////////////////////////////////////////////////////
app.use('/api', propertyRoutes);
app.use('/api', usersRoutes);
// app.use('/api', authRoutes);

// Routes /////////////////////////////////////////////////////////////


// Use __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the index.html file for the root URL ('/')
app.get('/', (req, res) => {
    console.log('THIS IS ap1TEWSTYREDp get, ', __dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('*', (req, res) => {
    console.log('THIS IS app use, ', __dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Static file-serving middleware
app.use(express.static(path.join(__dirname, 'index.html')));




// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
