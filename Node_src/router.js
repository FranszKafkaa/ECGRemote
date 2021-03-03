const router = require("express").Router()
const data = require("./class")

const fs = require("fs")
const path = require("path")
const dbo = require("./db")
let event = require("events")


const eventEmitter = new event.EventEmitter()

const {inspect} = require("util") 


// Criar um arquivo para cada transmissao de dados
// criar um timeout de conexao
// criar o link pro txt da req na rota /seetxt


// Rota metodo ip user-agent statusCode
eventEmitter.on("saveReq", (req, _res) => {
    let id = require('uniqid')


    let json_data = req.body.constructor === Object && Object.keys(req.body).length === 0 ? req.query : req.body

    console.log(json_data)

    let nomeArquivo = id()+ ".txt"
    let caminho = path.resolve(__dirname, "../", "conectados/" + nomeArquivo)

    fs.writeFileSync(caminho, inspect(req), err => {
        if(err) throw err
    })


    nomeArquivo = [nomeArquivo, caminho, req.header('x-forwarded-for') || 
    req.socket.remoteAddress, JSON.stringify(json_data) ,req.get('user-agent'),
    _res.statusCode, JSON.stringify(req.route.path),req.method]

    console.log(nomeArquivo)

    dbo.save_txt(nomeArquivo)
    
})


router.post("/demo", (_req, res) => {
    
    res.json({"res": JSON.parse(data.getShaHead())})
    
    eventEmitter.emit("saveReq",_req, res)
})

router.post("/savelog", (req,res) => {

    let data = [req.header('x-forwarded-for') || 
    req.socket.remoteAddress, JSON.stringify(req.body),req.get('user-agent')]

    dbo.insert_data(data, res)


    eventEmitter.emit("saveReq", req,res)

    //res.set("Connection", "close");
   // res.connection.destroy()
    
})


router.delete("/remove", (req, res) => {
    dbo.deleteAll(res)

    eventEmitter.emit("saveReq", req,res)
})

router.get("/see", (req,res) => {
    
    dbo.get_all(res)
    //eventEmitter.emit("saveReq", req)

    
})

router.get("/gettxt", (req,res) => {
    console.log(req.query)

    let caminho = path.resolve(__dirname, "../", "conectados/" +req.query.nome)

    res.download(caminho)
    //eventEmitter.emit("saveReq", req)
})

router.get("/salsa", (req,res) => {

    res.json(req.query)
    eventEmitter.emit("saveReq", req,res)
})

router.get("/seetxt", (req,res) => {
    dbo.get_txt(res);
})




router.get("/", (req,res) => {
    res.json({"res": res.statusCode})
    eventEmitter.emit("saveReq", req, res)
})

module.exports = router