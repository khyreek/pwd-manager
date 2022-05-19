import express from "express";
import cors from "cors";
import mysql from "mysql2";

// env
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "\\.env" });

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

const userList = [
    {
        id: 1,
        name: "Pedro",
        age: 19,
        married: false,
    },
    {
        id: 2,
        name: "Paulo",
        age: 20,
        married: false,
    },
    {
        id: 3,
        name: "Jennifer",
        age: 28,
        married: true,
    },
];

application.post("/addpassword", (req, res) => {
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
    res.json(userList);
});

application.post("/users", (req, res) => {
    // grab data sent by client
    const newUser = req.body;

    // add data to user list
    userList.push(newUser);

    // return new list
    res.json(userList);
});

application.put("/users", (req, res) => {
    // grab the new name
    const newName = req.body.newName;

    // loop through the list and update the names
    for (let i = 0; i < userList.length; i++) {
        userList[i].name = newName;
    }

    // return the new list
    res.json(userList);
});

application.delete("/users/:id", (req, res) => {
    // get id
    const id = parseInt(req.params.id);
    let foundId = false;

    // delete user with id
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].id === id) {
            userList.splice(i, 1);
            foundId = true;
        }
    }

    if (!foundId) {
        res.status(404).json({ error: "User not found" });
    } else {
        // return the list
        res.json(userList);
    }
});

// end
application.listen(3001, () => {
    console.log("Server is listening");
});
