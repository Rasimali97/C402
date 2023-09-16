const express = require ("express");
const mysql = require ("mysql2");
const cors = require ("cors");

const app = express();
app.use(express.json());
app.use (cors());

//connect database

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Salam123",
    database: "socialmedia",
  });

 //api get method

  app.get("/users", function (req, res) {    
    connection.query("select * from users", function (err, result, fields) {
      res.send(result);
    });
  });

//id get

  app.get("/users/:id", (req, res) => {
    const elem = req.params;
    
    connection.query("select * from users", function (err, result, fields) {
      
      for (let i = 0; i < result.length; i++) {
        if (elem.id == result[i].ID) {
          res.send(result[i]);
        }
      }
    });
  });
 
  //delete 
  app.delete("/users/:id", (req, res) => {
    const elem = req.params.id;
    
    connection.query(
      `DELETE FROM users WHERE ID=${elem}`,
      function (err, result, fields) {
        console.log(result);
      }
    );
    axios.delete("http://localhost:3000/" )
  });

  //post method
  
app.post("/users/", (req, res) => {
    let obj = req.body;

    connection.query(
      `INSERT INTO users (ID, ad, soyad, adres, pass)
      VALUES ("${obj.ID}", "${obj.ad}", "${obj.soyad}", "${obj.adres}", "${obj.pass}")`,
      function (err, result, fields) {
    
      }
    );
    connection.query("select * from users", function (err, result, fields) {
     
      console.log(result);
      res.send(result);
    });
    axios.post("http://localhost:3000/")
  });

  app.listen (3000)