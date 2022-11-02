import util from 'util';
import multer from "multer";


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

// create the exported middleware object
//export let uploadFileMiddleware = util.promisify(upload);

