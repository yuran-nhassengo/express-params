const express = require('express');
const cors = require('cors');
const port =3030;

const app = express();

app.use(cors());

app.get('/:name',(req,res) =>{
    res.type('.html');
    res.send(`<h1>Ola,${req.params.name}`);
});


app.listen(port,()=>{
    console.log('Servidor iniciado');
})