const router = require("express").Router()
const data = require("./class")


router.get("/", (req,res) => {
    res.json(JSON.parse(data.getShaHead())['test'])
})

module.exports = router