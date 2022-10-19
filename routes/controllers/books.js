import { v4 as uuidv4 } from 'uuid';


let books = [];

export const getBooks =  (req, res)=>{
    res.send(books)
}

export const createBook = (req, res) =>{
    console.log(req.body)
    books.push({id: uuidv4(), ...req.body })
    res.send(books);
}

export const getBook =  (req, res) =>{
    let id = req.params.id;

    let book = books.find(book => book.id == id);
    res.send(book)
}

export const deleteBook =  (req,res)=>{
    let id = req.params.id;
    books = books.filter(book => book.id !== id);
    res.send(books);
}

export const updateBook = (req,res)=>{
    let {title, Author, Pages,Price ,Puplisher,Date,Availabe} = req.body;
    let id = req.params.id;
    let book = books.find(book => book.id == id);
    if(title){
        book.title = title;
    }
    if(Author){
        book.Author = Author;
    }
    if(Pages){
        book.Pages = Pages;
    }
    if(Price){
        book.Price = Price;
    }
    if(Puplisher){
        book.Puplisher = Puplisher;
    }
    if(Date){
        book.Date = Date;
    }
    if(Availabe){
        book.Availabe = Availabe;
    }
    res.send(book)

}