

var express = require('express');
var bodyParser = require('body-parser');

var expressApp = express();
var port = 5000;
expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: false }));




expressApp.get('/', (req, res) => {
    res.send('Hello World!')
  })
expressApp.post("/app",(req,res)=>{
    console.log(req.body);
    console.log(req);
    res.send({"status":"success"})
})
  
  expressApp.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })