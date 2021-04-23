const mongoose = require("mongoose")



class dbConnect{
    constructor(){
        mongoose.connect("mongodb+srv://root:Valdisnei123@cluster0.aqjra.mongodb.net/ecgremoto?retryWrites=true&w=majority",
{useNewUrlParser: true, useUnifiedTopology: true})

        this.mongodb = mongoose.connection;

    }
}

module.exports = new dbConnect()