const user = require("../schema/user")


class userController{
    async create(req,res){
        
    }

    async findByUsername(req,res){
        const result = await user.find(req.param.name)

        return result
    }

    async findById(req,res){

    }
    async remove(req,res){
        
    }
}


module.exports = new userController()