import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import multer from "multer";


let books = [];


// import the multer module before configuring it to use the disc storage engine
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploadedFiles/')
  },
  filename: function (req, file, cb) {
    console.log(file.originalname);
    cb(null, file.originalname)
  }
})

//create multer instance
export let upload = multer({ storage: storage }).single('filetoupload');

await upload, function (req, res, next) {  
  try {
    if (req.file == undefined) {
      return res.status(400).send({ message: "Upload a file please!" });
    }
    res.status(200).send({

      message: "The following file was uploaded successfully: "
    });
  } catch (err) { 
    res.status(500).send({
      message: "Unable to upload the file"
    });
  
}

}
// get all books
export const getBooks =  (req, res)=>{
    res.send(books)
}

//create a new book
export const createBook = (req, res) =>{
    
    console.log(req.body)
    books.push({id: uuidv4(), ...req.body, filetoupload: req.file.filename})
    res.send(books);

    }

    

//get a book by id
export const getBook =  (req, res) =>{
    let id = req.params.id;

    let book = books.find(book => book.id == id);
    res.send(book)
}

//delete the book
export const deleteBook =  (req,res)=>{
    let id = req.params.id;
    const fileName = req.params.name;
   books = books.filter(book => book.id !== id);
    const directoryPath = __basedir + "/uploadedFiles/";
  fs.unlink(directoryPath+ fileName , (err) => {
    if (err) {
        throw err;
    }

    console.log("Delete File successfully.");
});
    res.send(books);
}

//update book data
export const updateBook = (req,res)=>{
    let { title, Author, Pages,Price ,Puplisher,Date,Availabe} = req.body;
    let filetoupload = req.file.filename;
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
    if(filetoupload){
      book.filetoupload = filetoupload;
  }
    res.send(book)

}
//download the file
export const download = (req, res) => {
  let id = req.params.id;
  const fileName = req.params.name;
  const directoryPath = __basedir + "/uploadedFiles/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

  

