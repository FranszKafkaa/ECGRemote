const app = require("express")()
const router = require('./router')
const bp = require('body-parser')

app.use(router).use(bp.json()).use(bp.urlencoded({extended: true}))


app.listen(3333, () => {
    console.log("ta ouvindo bem")
})
