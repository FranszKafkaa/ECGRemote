const exam = require("../schema/exam")

class examController{

    async create(req,res){
        const result = await exam.create(req)

        return res.json(result)
    }

    async find(req,res){
        const result = await exam.find(req)

        res.json(result)
        
    }

    async findAndUpdate(req,res){
        const result = await exam.findById(req.params.id)

        result["data"].push(parseInt(req.query["data"]))
        result.save()
        res.json({"res": res.statusCode})
    }

    async findById(req,res){
        const result = await exam.findById(req.params.id).exec()

        res.json(result)

    }

    async removeExam(req,res){
        const result = await exam.deleteOne(req.param.id)

        res.json(result)
    }
}

module.exports = new examController()





