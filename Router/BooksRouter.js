const express=require("express");
const { findBooks, addBook, updateList, deleteData } = require("../Handlers/BooksHandlers/BooksHandler");


const BooksRouter=express.Router();


BooksRouter.get("/books",findBooks);
BooksRouter.post("/books",addBook);
BooksRouter.post("/updateBooks/:id",updateList);
BooksRouter.delete("/books",deleteData);

module.exports=BooksRouter;