const mongoose = require("mongoose")


async function connectDB(){

    try{
    await mongoose.connect(process.env.MONGOOSE_URL)
    console.log("Database Connected")
    }catch(err)
    {
        console.log(err)
        console.log("Database Error")
    }
    

}

module.exports = connectDB