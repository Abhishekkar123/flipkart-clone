import User from "../model/user-schema.js";

export const userSignup=async(req,res)=>{

    try{

   //if user is already exits
    const exist=await User.findOne({username:req.body.username});
    if(exist){
        return res.status(401).json({message:"user is already exist"})
    }

        console.log(req.body);
        const user=req.body;
        const newUser=new User(user);
        await newUser.save()
        //await User,create()
        res.status(200).json({message:user})


    }catch(err){
        console.log("err in body",err.message);
        res.status(500).json({message:err.meassage})
    }

}


export const userLogin=async(req,res)=>
    {
        try{

            const username=req.body.username;
            const password=req.body.password;
            console.log(username," ",password);

           let user= await User.findOne({ username:username,password:password});
           if(user){
            return res.status(200).json({data:user})
           }else{
            return res.status(401).json('Invalid Login')
           }


        }catch(err){
            res.status(500).json("Error ",err.message )

        }

   }