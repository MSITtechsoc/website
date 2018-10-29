var express=require('express');

var app=express();

app.use(express.static(__dirname + '/public'));

app.listen(8000,function(){
    console.log("Server Running at 8000");
});


app.get('/',function(req,res){
    res.render('index');
    //res.sendFile(__dirname+"/index.js");
});