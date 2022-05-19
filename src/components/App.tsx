import React, { useEffect, useState } from "react";
import "../App.css";
import Something from "./Something";

// can you import src from outside src 
export default function App(): JSX.Element {
    return (
        <div className="main">
            <h1>uhhhhhhhhhhh</h1>
            <hr />

            {/* <Testing /> */}
            <Something />
        </div>
    );
}

function Testing(): JSX.Element {
    return (
        <div>
            <></>
        </div>
    );
}
