const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
// Create DB
const mysql =require('mysql')

const db = mysql.createConnection({
  user: 'root',
  host: "localhost",
  password: "86798679",
  database: "arborinterview"
}) 

// app.get('\insert')
const queryGetReq = `SELECT * FROM arborinterview.requests WHERE STATUS = 'idle';`

app.get('/test', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('test message from server')
})

app.get('/reqDeliveries', (req,res) => {
  res.set('Access-Control-Allow-Origin', '*');
  db.query(queryGetReq, (error, results, fields) => {
    if (error) throw error;
    console.log('Results: ', results);
    sendData = results
    res.send(JSON.stringify(sendData))
  });
  
  console.log('endof')
})

app.listen(5000, () => { console.log("Server Started on port 5000")})