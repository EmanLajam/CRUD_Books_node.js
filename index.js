import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/books.js';


const app = express();


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello')
})

app.use('/', booksRoutes )

app.listen(5000, () => {
    console.log('Server Running !');
})