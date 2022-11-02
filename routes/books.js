import express from 'express'
import {upload, getBooks, createBook, getBook, updateBook, deleteBook ,download } from '../controllers/books.js';

const router = express.Router(); 


router.get('/books', getBooks)

router.post('/books', upload, createBook)

router.get('/books/:id', getBook)

router.delete('/books/:id/:name', deleteBook)

router.patch('/books/:id', upload, updateBook )

router.get('/books/:id/:name', download)

export default router;
