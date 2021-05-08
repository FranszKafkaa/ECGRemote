const mongoose = require("mongoose")



class dbConnect{
    constructor(){

        mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

        this.mongodb = mongoose.connection;

    }
}

module.exports = new dbConnect()