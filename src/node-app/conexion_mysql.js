// app.js
'user strict';
const mysql = require('mysql');
const express = require('express');
const router = express.Router();
const CircularJSON = require('circular-json');
var stringify = require('json-stringify-safe');

//const {parse, stringify} = require('../../node_modules/flatted/cjs');
const request = require('request');

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

function abrirConexion() { 

  connection.connect((err) => {
    if(err){
        console.log(err);
        console.log('Error connecting to Db');
        return;
    }

    console.log('Connection established');
    
    connection.query('SELECT id, name, translate FROM phrases', {json: true}, function(error, result){
      if (error) {
        console.log('Error en la Query ' + error);
      } else {
        router.get('/phrases', (error, response) => { 
          response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
          response.setHeader('Access-Control-Allow-Methods', 'GET');
          response.send(JSON.parse(JSON.stringify(result)));
        })
      }
  });
  });
}

abrirConexion();

module.exports = router;
//console.log("aca la llamo");

/*
const pool = mysql.createPool(connection);

router.get('/phrases', (request, response) => {    
  //var q = request.query.q
  // var access_token = response.query.access_token

  abrirConexion();
  console.log("hola mundo");

  pool.query('SELECT * FROM phrases', (error, result) => {
    if (error) throw error;

    response.send(result);
  });

  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  response.setHeader('Access-Control-Allow-Methods', 'GET');

  //https://api.mercadolibre.com/sites/MLA/search?q=​:query
  /**
  pool.query('Select * from phrases', {json: true}, (err, res2, req2) => {
      if(err) return console.log('error:', err);
      res.status(res2.statusCode).send(JSON.stringify(res2.body))
  })
   */



//});

//module.exports = router;

//module.exports = connection;
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



// Exportar la variable como modulo
//exports.connection = connection;

/*
connection.end((err) => {
  console.log('Conexion finalizada');
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
*/
// Select simple


