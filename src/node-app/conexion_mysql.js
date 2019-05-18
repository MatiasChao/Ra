'user strict';
const mysql = require('mysql');
const express = require('express');
const router = express.Router();

const connection = mysql.createConnection({
    host: 'server343.dinamichosting.com',
    port: 33061,
    user: 'losdosca_usr01',
    password: 'G5ivarc2M2',
    database: 'losdosca_english'
});


connection.connect((err) => {
  if(err){
      console.log('Error connecting to Db' + err);
      return;
  } else {
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

    connection.query('SELECT id, name, translate FROM word', {json: true}, function(error, result){
      if (error) {
        console.log('Error en la Query ' + error);
      } else {
        router.get('/words', (error, response) => { 
          response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
          response.setHeader('Access-Control-Allow-Methods', 'GET');
          response.send(JSON.parse(JSON.stringify(result)));
        });
      }
    })
  }
});

module.exports = router;
