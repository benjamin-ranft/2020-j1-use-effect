import React from "react";

export default function CharacterImage ({data}){
    return(
        <img src={data.image} alt={data.name}/>
    )
}