const Users =require("../../Database/Users");
const jwt=require("jsonwebtoken");

async function register(req,res,next)
{
    let body=req.body;
    await Users.create(body);
    return res.status(200).send({message:"User has been successfully created"})

}
async function login(req,res,next)
{
    let {email,password}=req.body;
    let user_data=await Users.find({email:email});

    if(user_data)
    {
        if(user_data.password==password)
        {

            let encrypt=jwt.sign({name:user_data.name,email:user_data.email},secretKey123);

            return res.status(200).send({user:encrypt});
        }
        else{
            return res.send({message:"Enter valid password"})
        }
    }
    else
    {
        return res.status(401).send({message:"User not found"})
    }
}

module.exports={
    register,login
}