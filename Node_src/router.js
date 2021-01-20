const router = require("express").Router()
const data = require("./class")

const fs = require("fs")
const path = require("path")
const dbo = require("./db")

const id = require('uniqid')
const {inspect} = require("util") 

// Criar um arquivo para cada transmissao de dados
// criar um timeout de conexao
// criar o link pro txt da req na rota /seetxt

router.post("/demo", (_req, res) => {
    res.json({"res": JSON.parse(data.getShaHead())})

})

router.post("/savelog", (req,res) => {
   

    let data = [id(),req.header('x-forwarded-for') || req.connection.remoteAddress, JSON.stringify(req.body)]

    console.log(data)
    dbo.insert_data(data, res)

    
})


router.delete("/remove", (_, res) => {
    dbo.deleteAll(res)
})

router.get("/see", (_,res) => {
    dbo.get_all(res)
    
})

router.get("/seetxt", (req,res) => {
    //listar os arquivos disponiveis com o link 
})

router.get("/:num", (req,res) => {
    console.log(req)

    let nomeArquivo = path.resolve(__dirname, "../", "conectados/" + new Date() + ".txt")

    fs.writeFileSync(nomeArquivo, inspect(req), err => {
        if(err) throw err
    })


    res.json({"res" : res.statusCode})
})

router.get("/", (_,res) => {
    res.json({"res": res.statusCode})
})

module.exports = router