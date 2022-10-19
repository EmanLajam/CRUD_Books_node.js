import express from 'express'
import { getBooks, createBook, getBook, updateBook } from './controllers/books.js';


const router = express.Router(); 

router.get('/books', getBooks)

router.post('/books', createBook)

router.get('/books/:id', getBook)

router.delete('/books/:id',)

router.patch('/books/:id', updateBook)

export default router;
