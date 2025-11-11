const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//Solicitude de http
app.use(bodyParser.urlencoded({extended: false}));

//Configuracion del motor de plantilla
app.set('view engine', 'ejs');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'toor',
    database: 'node_crud',
    port: '3306'

});

//verificar la conexion con la db
db.connect(err=>{
    if(err){
        console.log('Error en el servidor', err);
    }else{
        console.log('Conexion con exito :)')
    }
});

const port = 3008;
app.listen(port,()=>{
    console.log(`server http://localhost:${port}`)

});


//Mostrar informacion en una lista -> index.ejs
app.get('/',(req,res)=>{
    //consulta
    const consulta = 'SELECT * FROM users';

    db.query(consulta,(err,results)=>{
        if(err){
            console.error('Error en recuperar datos', err);
            res.send('Error: No se recuperan datos');
        }else{
            res.render('index',{users: results});
        }
    });
});
