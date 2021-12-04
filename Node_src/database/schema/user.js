const { Schema, model } = require("mongoose");


const types = Schema.Types

const userSchema = new Schema({
    name: types.String,
    userName: types.String,
    doctor: {
        type: types.Boolean,
        default: false
    },
    email: types.String,
    telefone: types.String
})


module.exports = model("user", userSchema)