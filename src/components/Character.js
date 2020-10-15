import React, {useEffect} from "react";
import Characteristics from "./Characteristics";
import CharacterImage from "./CharacterImage";

export default function Character({data}){

    useEffect(()=> {
        console.log(data)
    },[]);

    return (
        <div>
            <CharacterImage data={data}></CharacterImage>
            <Characteristics data={data}></Characteristics>
        </div>
    )
}