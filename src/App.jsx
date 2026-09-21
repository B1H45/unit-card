import { useState } from "react";
import "./App.css";
import "./fonts.css";
import Card from "./card";
import imgRebelTroopers from "./assets/rebel_troopers_blank.jpg";

function App() {
    const agile = {
        name: "Agile",
        level: 1,
        description:
            "The Agile X keyword allows a unit to gain a number of dodge tokens equal to x each time that unit performs a standard move action.",
    };
    const nimble = {
        name: "Nimble",
        description:
            "After a unit that has the Nimble keyword defends against an attack, if it spent at least 1 dodge token, it gains 1 dodge token.",
    };
    const rebelTroopers = {
        name: "Rebel Troopers",
        keywords: [agile, nimble],
        speed: 2,
        health: 1,
        courage: 1,
        image: imgRebelTroopers,
    };
    return (
        <>
            <div className="card-section">
                <Card unit={rebelTroopers}></Card>
            </div>
        </>
    );
}

export default App;
