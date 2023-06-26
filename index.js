
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(express.static('.'));

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
   console.log("Vào ip localhost:3000")
});
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   console.log("Database created!");
   db.close(); }
);*/
