import mongoose from 'mongoose'
export const connection=async (userName,Pass)=>{

    const URL=`mongodb+srv://${userName}:${Pass}@ecommerce.44ntprz.mongodb.net/ecommerce`
    try{
      await mongoose.connect(URL);
        console.log("database connect successfully")

    }catch(err){
        console.log("err while connecting database",err)
    }
}

export default connection;