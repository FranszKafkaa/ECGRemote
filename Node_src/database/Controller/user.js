const user = require("../schema/user")


class userController{
    async create(req,res){
        const result = user.create(req)

        res.json(result)
        
    }

    async findByUsername(username){
        const result = await user.find(username)
        return result
    }

    async findById(req,res){
        const result = user.findById(req.param.id)
        res.json(result)

    }
    async remove(req,res){
        const result = user.deleteOne(req.param.id)

        res.json(result)
    }
}


module.exports = new userController()