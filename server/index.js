// create an express server 

const express = require('express') 
const app = express()
const mysql = require("mysql") 

const db = mysql.createPool({
    host: "localhost", 
    user: "root", 
    password: "password",
    database: "testBase"
})



app.listen(3001, () => {
    console.log("running on port 3001")
})

app.get('/', (req, res) => {
    res.send("Hello Jellllo") 
})