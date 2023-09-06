const express = require('express');

const app  = express();





// projext-name = POS 

// Password = 'GTeFh5zYwxeykVc1'

app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.get("*",(req,res,next)=>{
    res.sendFile(__dirname+"/index.html")
})


const Port = process.env.PORT || 3000 ;
app.listen(Port, ()=>{
    console.log(`Server Runing On This Port Number-${Port}`) 
});