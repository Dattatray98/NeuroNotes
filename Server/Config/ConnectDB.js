const mongoose = require("mongoose")

const connectMDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected")
    }catch(err){
        console.log(err);
    }
}

module.exports={
    connectMDB
}