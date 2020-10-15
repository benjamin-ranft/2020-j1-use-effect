import React from "react";

export default function Characteristics({data}){
    return(
        <div>
            <h2> {data.name}</h2>
            <p>Status: {data.status}</p>
            <p>Species: {data.species}</p>
        </div>

    )
}