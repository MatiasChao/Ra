'user strict';
var express = require('express');
var router  = express.Router();
var mysql = require('mysql');
// Nuestra conexion dentro de bin
var connection = require('../node-app/conexion_mysql');
const request = require('request');
 


var Phrase = function(phrase){
  this.id = phrase.id;
  this.name = phrase.name;
  this.translate = phrase.translate;
}

Phrase.getAllPrhases = function getAllPrhases(result) {
  connection.query("Select * from phrases", function (err, res) {

          if(err) {
              console.log("error: ", err);
              result(null, err);
          }
          else{
            console.log('tasks : ', res);  

           result(null, res);
          }
      });   
};


 
// Select simple
/*
var query = connection.query('SELECT id, name, translate FROM phrases', (error, result) => {
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

var query = connection.query( 'SELECT * FROM phrases', ( err, rows ) => {
  // do something with the results here
  return rows;
} );
 */

module.exports= Phrase;