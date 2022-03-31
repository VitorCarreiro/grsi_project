const express = require("express");
const path = require("path");
const app = express();

const port = 4500;

//Rota principal
app.get("/", (request, response) =>{
response.sendFile(path.join(__dirname,("./public/index.html")))
})

app.use(express.static("./public"))

app.listen(port, ()=>{
    console.log('App listening on port ' + port);    
});

