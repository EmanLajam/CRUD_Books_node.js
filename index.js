import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/', booksRoutes )

global.__basedir = __dirname;
var corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

app.listen(5000, () => {
    console.log('Server Running !');
})

