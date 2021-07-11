

const fetch = require("node-fetch");
const express = require("express")
const bodyParser = require("body-parser")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


app.use('/',async (req,res)=> {
    const rate_url = 'https://rate_url_goes_here'
    await fetch(rate_url)
    .then(res => res.json())
    .then(function (data){
        
        console.dir(data)
        res.send(data)
        
    }).catch(error => console.error(error));
});

app.listen(PORT,()=> console.log(`server running on port http://localhost:${PORT}`));
