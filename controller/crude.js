const conexion = require('../database/db');

exports.save = (req, res) =>{
    const user = req.body.user;
    const roll = req.body.roll;

    conexion.query('INSERT INTO users SET ?', {name:user, roll: roll}, (error, result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/');
        }
    })
}

exports.update = (req, res)=>{
    const idusers = req.body.idusers;
    const name = req.body.name;
    const roll = req.body.roll;
    conexion.query('UPDATE users SET ? WHERE idusers = ?', [{name: name, roll: roll}, idusers], (error, results)=>
    {
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/');
        }
    })
}