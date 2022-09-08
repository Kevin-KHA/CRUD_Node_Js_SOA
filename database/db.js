const sq = require('mysql');

const conexion =sq.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_crude'
})

conexion.connect((error)=>{
    if(error){  
        console.error('el error de conexion es ' +error);
        return
    }
    console.log('Conexión a base de datos correcta');
})
module.exports = conexion;