const express = require('express');
const app = express();
const bodyparser=require('body-parser');
const cors =require('cors');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());
var mydata=[];
app.get('/',function(req,res){
res.status(401).json(mydata)
});
app.post('/users',function(req,res){
    console.log(req.body)
    mydata.push(req.body);
    res.json({
        message:"saved"
    })
})



app.put('/modifyData/:id',(req, res) => {
    console.log(req.body.userId);
   mydata[parseInt(req.body.userId)-1]={
    name : req.body.name,
    email : req.body.email
}

   } ,
  res.json({
      message:"json"
  })

})



app.listen(3000,function(){
console.log("port is running");
});