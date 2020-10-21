const router = require("express").Router()
const data = require("./class")
const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        let dir = "./python_src/upload_file"

        if (!fs.existsSync(dir))
            fs.mkdirSync(dir)

        cb(null, dir)
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

let upload = multer({storage}).fields([{name: "files", maxCount: 12}])

router.post("/demo", (req, res) => {

    res.json({"res": JSON.parse(data.getShaHead())})

})


router.post("/uploads",(req,res) => {
    upload(req,res, err => {
        if(err instanceof multer.MulterError)
            throw new Error(err)
        console.log(req.files)
    })

})

module.exports = router