import React, {useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import styled from "styled-components/macro";


export default function RickMortyList(){
    const [rawData,setRawData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);


    function useCharacterCounter(startIndex){
        const [characterIndex, setCharacterIndex] = useState(startIndex);
        const characterIndexIncrement = () => {setCharacterIndex(characterIndex +1)};
        const characterIndexDecrement = () => {setCharacterIndex(characterIndex-1)};
        return [characterIndex, characterIndexIncrement, characterIndexDecrement];
    }
    const [characterIndex, characterIndexIncrement, characterIndexDecrement]= useCharacterCounter(1);



    useEffect(() => {
            fetchData(1);
        }
        ,[]);

    useEffect( ()=>{
        fetchData(characterIndex)
    },[characterIndex])

    useEffect(()=> {
        console.log(rawData)
    }, [rawData])


    function fetchData(characterIndex){
        axios
            .get("https://rickandmortyapi.com/api/character/" + characterIndex)
            .then((response) => setRawData(response.data))
        setIsLoading(false);

    };



    return(
        <StyledRickMortyList>
            {rawData && <Character data={rawData}></Character>}
            <button
                disabled={characterIndex <= 1}
                onClick={()=>{
                characterIndexDecrement();
                setIsLoading(true);
            }}>{isLoading ? "is loading..." : "<<<"}</button>
            #{characterIndex}
            <button onClick={()=>{
                characterIndexIncrement();
                setIsLoading(true);
            }}>{isLoading ? "is loading..." : ">>>"}</button>
        </StyledRickMortyList>
    )

}

const StyledRickMortyList = styled.div`
background-color: white;
border-radius: 10px;
padding: 30px;
`;
