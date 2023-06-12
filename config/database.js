const mongoose=require("mongoose");
require("dotenv").config();

const connectWithDb=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("DB Connected successfully"))
    .catch((e)=>{
        console.log("Error occured in DB connection");
        console.log(e.message);
        process.exit(1);
    })
}

module.exports=connectWithDb;