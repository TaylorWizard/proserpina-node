import express from 'express'
import bodyParser from 'body-parser'
let app = express()

//set port variable , which is a access port
app.set('port', process.env.PORT || 3000)
//解析 application/json
app.use(bodyParser.json())
//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())


app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
  res.header("X-Powered", '3.2.1')
  res.header("Content-type", "application/json;charset=utf-8")
  next()
})

app.get('/', (req, res) => {
  console.log('get')
  res.redirect("https://www.baidu.com")
})

app.post('/', (req, res) => {
  console.log('post')
  res.redirect("https://www.baidu.com")
})



app.listen(3000, (req, res) => {
  console.log('app is listening in port 3000')
})