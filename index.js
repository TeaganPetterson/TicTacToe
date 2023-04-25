const express = require("express")
const path = require("path")
const app = express()
const port = 3000
app.set("view engine", "ejs");

const knex = require("knex")(
    {
        client : "pg",
        connection: {
            host: "localhost",
            user: "postgres",
            password: "Teasauce002",
            database: "postgres",
            port: 5432
        }
    })


app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use(express.static(path.join(__dirname,'css')));

app.get('/', (req,res) =>{
    res.render("ticTacToe");
});


app.listen(port, () => {console.log("I'm running on the server")});