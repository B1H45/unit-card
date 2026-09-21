import { useState } from "react";
import "./App.css";

// Takes a 'unit' object
function Card({ unit }) {
    const { name, keywords, speed, health, courage, image } = unit;
    return (
        <>
            <div className="card">
                <img src={image} className="card-img" />
                <ul className="card__keywords">
                    {keywords.map((keyword) => {
                        return (
                            <li key={keyword}>
                                <button
                                    className="keyword-graphic"
                                    onClick={() => {
                                        alert(keyword.description);
                                    }}
                                >{`${keyword.name} ${keyword.level ?? ""}`}</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Card;
