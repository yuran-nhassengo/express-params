const express = require('express');
const cors = require('cors');
const port =3030;

const app = express();

app.use(cors());

app.get('/',(req,res) =>{
    res.type('.html');
    res.send(`<h1>Ola,${req.params.name}`);
});

app.get('/user',(req,res) =>{
    res.type('.html');
    if(req.query.name && req.query.age){
        const {name,age} = req.query;
        res.send(`<h1>Ola,${name} - ${age}</h1>`);
    }
});


app.listen(port,()=>{
    console.log('Servidor iniciado');
})