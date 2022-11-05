const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const mysql = require('mysql');

/* Database */
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "CRUDDataBase",

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extends: true }));

/* Routing EXPRESS */
app.get('/', (req, res) => {

    /*const sqlInsert = "INSERT INTO movie_reviews (movieName,movieReview) VALUES ('ABCD2','Another dance based good movie');"

    db.query(sqlInsert, (err, result) => {
        res.send("Successful");
    });*/
    res.send("Hello World");

});



app.post('/api/insert', (req, res) => {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?);"

    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result)
    });
})




app.listen(3001, () => {
    console.log("running on port 3001 perfectly")
});