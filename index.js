const fs = require("fs");
const express = require("express");
const app = express();
const cors = require("cors");

// date and time
let date = new Date();
let file = ((date.getDate())+"-"+(date.getMonth()+1)+"-"+(date.getFullYear())+"-"+(date.getHours())+"-"+(date.getMinutes())+"-"+(date.getSeconds()));
let document = (file + ".txt")

// timestamp
let timestamp = date.getTime().toString();

let options = {
    origin : "*"
}
app.use(cors(options));

app.get("/datetime",function(req,res){
    res.json(
        fs.writeFile(document,timestamp,function(err){
            if(err)throw err;
            console.log("File Created");
        })
    )
})


app.listen(3001);