// app.js

'user strict';
const mysql = require('mysql');
const express = require('express');
const router = express.Router();

// First you need to create a connection to the db
const connection = mysql.createConnection({
    host: 'server343.dinamichosting.com',
    port: 33061,
    //user: 'losdosca',
    //password: 'jDo225Yql9',
    user: 'losdosca_usr01',
    password: 'G5ivarc2M2',
    database: 'losdosca_english'
});

connection.connect((err) => {
  if(err){
      console.log(err);
      console.log('Error connecting to Db');
      return;
  }

  console.log('Connection established');
  
  connection.query('SELECT id, name, translate FROM phrases', [1], function(error, result){
    if(error){
      console.log('Error en la Query ' + error);
    }else{
      console.log(result);
    }
});
});



module.exports = connection;
//router.get('/phrases', function(req, res) {

  /*
  var query = connection.query('SELECT id, name, translate FROM phrases', [1], function(error, result){
    if(error){
      throw error;
    }else{
     // res.json(result);
      // req.json(result);
      var resultado = result;
      console.log(resultado);
      if(resultado.length > 0){
          console.log(resultado[0].id + ' ' + resultado[0].name + ' / ' + resultado[0].translate);
      }else{
          console.log('Registro no encontrado');
      }
    }
  }
  );
//});

*/
router.get('/prhases', (req, res) => {    
  var q = req.query.q
  var access_token = req.query.access_token

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  //https://api.mercadolibre.com/sites/MLA/search?q=​:query
  request.query('Select * from phrases', {json: true}, (err, res2, req2) => {
      if(err) return console.log('error:', err);
      res.status(res2.statusCode).send(JSON.stringify(res2.body))
  })
});


// Exportar la variable como modulo
exports.connection = connection;

/*
connection.end((err) => {
  console.log('Conexion finalizada');
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
*/
// Select simple


