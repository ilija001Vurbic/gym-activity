const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "gym",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getactivity/:date',(req,res)=>{
    const date = req.params.date;
    const sqlSelect = "SELECT * FROM activity WHERE date=?;"
    db.query(sqlSelect, date, (err, result) => {
        res.send(result);
    });
})

app.get('/api/getactivity/:date/:userID', (req, res) => {
    const date = req.params.date;
    const userID = req.params.userID;
    const sqlSelect = "SELECT * FROM activity WHERE date=? AND userID=?;"
    db.query(sqlSelect, [date, userID], (err, result) => {
    res.send(result);
    });
    })

app.get('/api/login/',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const sqlSelect = "SELECT * FROM user WHERE username=? and password=?;"
    db.query(sqlSelect, [username,password], (err, result) => {
        console.log(result);
        res.send(result);
    });
})


app.get('/api/login/:username',(req,res)=>{
    const username = req.params.username;
    const sqlSelect = "SELECT id FROM user WHERE username = ?;"
    db.query(sqlSelect, username, (err, result) => {
        console.log((result[0].id).toString());
        res.status(200).send((result[0].id).toString());
    });
})


app.post('/api/register/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const roleID = req.body.roleID;
    const sqlInsert = "INSERT INTO user (username, password, email, firstName, lastName, roleID) VALUES (?,?,?,?,?,?);    "
    db.query(sqlInsert, [username, password, email, firstName,lastName,roleID], (err, result) => {
        console.log(result);
    });
})

app.put('/api/user/edit/:id', (req, res) => {
    const id = req.params.id;
    const { username, password, firstName, lastName } = req.body;
    const sqlUpdate = "UPDATE user SET username = ?, password = ?, firstName=?, lastName=? WHERE id = ?;"
    db.query(sqlUpdate, [username, password, firstName,lastName, id], (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    });
});

app.post('/api/activity/', (req, res) => {
    const activity = req.body.activity;
    const duration = req.body.duration;
    const userID = req.body.userID;
    const date = req.body.date;
    const sqlInsert = "INSERT INTO activity (activity, duration, userID, date) VALUES (?,?,?,?);"
    db.query(sqlInsert, [activity, duration, userID, date], (err, result) => {
        console.log(result);
    });
})
app.delete('/api/delete/:id',(req,res)=>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM activity WHERE id=?;"
    db.query(sqlDelete, id, (err, result) => {
        if(err) console.log(err);
    });
})
app.put('/api/putActivity/:id', (req, res) => {
    const id=req.params.id;
    const activity = req.body.activity;
    const duration = req.body.duration;
    const sqlUpdate = "UPDATE activity SET activity=?, duration=? WHERE id=?;"
    db.query(sqlUpdate, [activity, duration, id], (err, result) => {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
})
db.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected");
    }
});

app.listen(3001, () => {
    console.log("running on port 3001");
});