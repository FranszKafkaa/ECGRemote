const exam = require("../schema/exam")

class examController{
    async index(req,res){
        const data = await examSchema.find({})

        return res.json(data)
    }


    async create(req,res){
        const boo = await exam.create({title: "bolo", data:[1,2,3,4,5,6], sampling_rate: "12", resolution: 12})

        return res.json(boo)
    }
}

module.exports = new examController()





