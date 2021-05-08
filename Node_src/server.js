const app = require("express")()
const router = require('./router')
const bp = require('body-parser')


require("dotenv").config()

const mongoDB = require('./database/mongo')

mongoDB.mongodb.once("open",  _ => {
    console.log("Mongo Conectado")
})

let allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}

app.use(allowCrossDomain);


app.set('view engine', 'html')

app.use(bp.json()).use(bp.urlencoded({extended: true})).use(router)


app.listen(process.env.PORT || 3333, () => {
    console.log("server started")
})
