import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
dotenv.config();


import propertyRoutes from './server/api/routes/propertyRoutes.js';



// import router from './api/index.js';


const PORT = process.env.PORT || 3000;

const app = express()
app.use(express.json())
app.use(cors());


// Routes /////////////////////////////////////////////////////////////
app.use('/api', propertyRoutes);

// Routes /////////////////////////////////////////////////////////////


// Use __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the index.html file for the root URL ('/')
app.get('/', (req, res) => {
    console.log('THIS IS app get, ', __dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/', (req, res) => {
    console.log('THIS IS app use, ', __dirname);
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Static file-serving middleware
app.use(express.static(path.join(__dirname)));




// Error Handling Middleware
app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
