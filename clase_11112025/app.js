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

//Agregar usuario
app.post('/add', (req,res)=>{
    const {name, email} = req.body;

    const consulta = 'INSERT INTO users (name, email) VALUES (?, ?)'

    db.query(consulta, [name,email],(err)=>{
        if(err){
            console.error('Error al agregar usuario', err);
            res.send('Error al agregar usuario');
        }else{
            res.redirect('/');
        }
    });
});

//solicitar datos del usuario por medio del listado
app.get('/edit/:id', (req,res)=>{
    const {id} = req.params;
    const consultaId = 'SELECT * FROM users WHERE id =?';

    db.query(consultaId,[id],(err,results)=>{
        if(err){
            console.error('Error a la peticion de datos', err);
            res.send('Error');
        }else{
            res.render('edit',{user:results[0]});
        }
    })
});

//Actualizar
app.post('/update/:id',(req,res)=>{
    const {id} = req.params;
    const {name, email} = req.body;

    const consultaUpdate = 'UPDATE users SET name = ?, email = ? WHERE id = ? ';
    db.query(consultaUpdate, [name,email,id], (err)=>{
        if(err){
            console.error('Error al actualizar', err);
            res.send('Error al actualizar');
        }else{
            res.redirect('/');
        }
    })
});

//eliminar
app.get('/delete/:id',(req,res)=>{
    const {id} = req.params;
    const consultaElimina = 'DELETE FROM users WHERE id = ?';
    db.query(consultaElimina, [id], (err)=>{
        if(err){
            console.error('Error al eliminar al usuario', err)
            res.send('Error al eliminar al usuario');
        }else{
            res.redirect('/')
        }
    })
});

app.use(express.static('public'));