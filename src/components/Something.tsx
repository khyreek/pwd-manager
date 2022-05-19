import React, { useEffect, useState } from "react";
import { uuid } from "../utilimports";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Axios from "axios";
import useLocalStorage from "../utils/hooks/useLocalStorage";

interface PasswordRecord {
    title: string;
    password: string;
}

export default function Something(): JSX.Element {
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [passwords, setPasswords] = useLocalStorage<PasswordRecord[]>(
        "pwds",
        []
    );

    const addPassword = () => {
        // if (title in passwords.map((pwd) => pwd.title)) {
        //     alert("Title already exists");
        //     return;
        // }
        setPasswords([...passwords, { title, password }]);

        Axios.post("http://localhost:3001/add-password", { password, title });
        [setPassword, setTitle].forEach((setter) => setter(""));
    };


    useEffect(() => {
        // Axios.get("http://localhost:3001/users").then((res) => {
        //     console.log(res.data);
        // });
        // Axios.post("http://localhost:3001/users", { name: "p", age: 18 }).then(
        //     (res) => {
        //         console.log(res.data);
        //     }
        // );
        // Axios.put("http://localhost:3001/users", { newName: "ffuaksdkajd" }).then(
        //     (res) => {
        //         console.log(res.data);
        //     }
        // );
        // Axios.delete("http://localhost:3001/users/1").then((res) => {
        //     console.log(res.data);
        // });
    }, []);

    return (
        <div className="page-container">
            <div className="new-password-container">
                <TextField
                    label="Title"
                    placeholder="Facebook"
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />
                <TextField
                    label="Password"
                    placeholder="password123"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Button variant="contained" onClick={addPassword}>
                    Add Password
                </Button>
            </div>
            <div>
                {passwords.map((pwd) => (
                    <div key={pwd.title}>
                        {pwd.title} -{">"} {pwd.password}
                    </div>
                ))}
            </div>
        </div>
    );
}
