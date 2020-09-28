const router = require("express").Router()
const data = require("./class")


router.get("/", (req,res) =>{
    res.json({"res" : JSON.parse(data.getShaHead())})
})

module.exports = router