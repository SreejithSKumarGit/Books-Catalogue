const Books =require("../../Database/Books");
const Users = require("../../Database/Users");

async function addBook(req,res,next)
{
    let {body}=req;

    await Books.create(body);
    return res.status(200).send({message:"Books has been added to the list"});
}
async function findBooks(req,res,next)
{
    let bookData=await Books.find();

    res.status(200).send({data:bookData});
}
async function updateList(req,res,next)
{
    let {user}=req.header;
    let {body}=req;

    let {id}=req.params;
    let userData=await Users.findById({name:user.name});
    let bookData=await Books.findById({_id:id});
    if(bookData.user_id==userData._id)
    {
        await Books.findOneAndUpdate({_id:id},body)
        return res.status(200).send({message:"Updated"})
    }
    else
    {
        return res.status(401).send({message:"User has no permission to update the data"});
    }
}
async function deleteData(req,res,next)
{
    let {user}=req.header;


    let {id}=req.params;
    let userData=await Users.findById({name:user.name});
    let bookData=await Books.findById({_id:id});
    if(bookData.user_id==userData._id)
    {
        await Books.findOneAndDelete({_id:id})
        return res.status(200).send({message:"Deleted"})
    }
    else
    {
        return res.status(401).send({message:"User has no permission to delete the data"});
    }
}

module.exports={
    addBook,findBooks,updateList,deleteData
}

