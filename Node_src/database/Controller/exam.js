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

        if(result != null){
            result["data"].push(parseInt(req.query["data"]))
            result.save()
            res.json({"res": res.statusCode})

            return null
        }
        res.json({"res": "Exame nao encontrado"})
        
    }

    async findById(req,res){
        const result = await exam.findById(req.params.id).exec()

        res.json(result)

    }

    async postUpdate(req,res){
        const result = await exam.findById(req.params.id)
        if(result != null){
            req.body.data.forEach(element => {
                result["data"].push(parseInt(element))
            });

            result.save()

            res.json({"Status":"Exame Salvo"})

            return null
        }

        res.json({"status" : "Exame nao enxontrado"})

    

        
    }

    async removeExam(req,res){
        const result = await exam.deleteOne(req.param.id)

        res.json(result)
    }
}

module.exports = new examController()





