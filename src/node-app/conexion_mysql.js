// app.js
const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
    host: 'server343.dinamichosting.com',
    port: 33061,
    //user: 'losdosca',
    //password: 'jDo225Yql9',
    user: 'losdosca_usr01',
    password: 'G5ivarc2M2',
    database: 'losdosca_english'
});

con.connect((err) => {
  if(err){
      console.log(err);
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});