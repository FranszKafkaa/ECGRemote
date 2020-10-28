const app = require("express")()
const router = require('./router')
const bp = require('body-parser')


let allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

app.use(bp.json()).use(bp.urlencoded({extended: true})).use(router)


app.listen(process.env.PORT || 3333, () => {
    console.log("server started")
})
