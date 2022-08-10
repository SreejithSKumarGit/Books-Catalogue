const connectDatabase=require("./Database/index");
const express=require("express");
const cors= require("cors");
const BooksRouter=require("./Router/BooksRouter");
const UserRouter=require("./Router/UserRouter");

const app=express();
app.use(cors());
app.use(express.json());
app.use(UserRouter);
app.use(BooksRouter);

connectDatabase()
.then(()=>{
    app.listen(3001,()=>
    {
        console.log("Server Connected successfully");
    })
})
