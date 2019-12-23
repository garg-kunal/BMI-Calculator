const express= require('express');
const app = express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});
app.get("/styles.css",function(req,res){
	res.sendFile(__dirname+"/styles.css");
});
app.post("/",function(req,res){
	var a= Number(req.body.n1);
	var b = Number(req.body.n2);
	var d=a/b;
    	res.send("sum is equal to "+d);
});

app.listen(3000,function(){
	console.log("server run at 3000...");
});