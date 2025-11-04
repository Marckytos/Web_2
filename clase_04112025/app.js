const express = require('express');
const pageRouter = require('./routes/pages');


const app = express();
app.use('/',pageRouter);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.redirect('/page1');
});

const port = 3000;
app.listen(port, () =>{
    console.log(`Servidor: http://localhost:${port}/`)
});

