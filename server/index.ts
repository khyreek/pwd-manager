import express from "express";
import cors from "cors";
import mysql from "mysql2";

// env
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "\\.env" });

type MySQLQueryError = mysql.QueryError | null;
type MySQLQueryResult =
    | mysql.RowDataPacket[]
    | mysql.RowDataPacket[][]
    | mysql.OkPacket
    | mysql.OkPacket[]
    | mysql.ResultSetHeader;

// misc
const application = express();
application.use(cors());
application.use(express.json());

// db
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: process.env.KAKERFL,
    database: "passwordmanager",
});

application.post("/add-password", (req, res) => {
    const { password, title } = req.body;

    db.query(
        "INSERT INTO passwords (password, title) VALUES (?, ?)",
        [password, title],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Success");
            }
        }
    );
});

/**
 *
 *
 *
 *
 *
 *
 *
 *
 */

application.get("/users", (req, res) => {
    db.query("SELECT * FROM users;", (err, result) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(result);
        }
    });
});

application.post("/users", (req, res) => {
    const { name, age } = req.body;

    db.query(
        "INSERT INTO users (name, age) VALUES (?, ?);",
        [name, age],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        }
    );
});

application.put("/users", (req, res) => {
    const { newName } = req.body;

    db.query(
        `
        UPDATE users 
        SET name=(?), age=4000 
        WHERE id=1
        `,

        [newName, 8000],
        (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        }
    );
});

application.delete("/users/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM users WHERE id=(?)", [id], (err, result) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(result);
        }
    });
});

// end
application.listen(3001, () => {
    console.log("Server is listening");
});
