import React, {useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import useCounter from "./hooks/useCounter";
import styled from "styled-components/macro";


export default function RickMortyList(){
    const [rawData,setRawData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [characterIndex, characterIndexIncrement, characterIndexDecrement] =
        useCounter(JSON.parse(localStorage.getItem("characterIndex")) || 1);

    const [characterCache,setCharacterCache]= useState([]);
    function addToCharacterCache()

    useEffect(() => {
        localStorage.setItem("characterIndex", JSON.stringify(characterIndex))
    }, [characterIndex])


    useEffect(()=>{
        const index=JSON.parse(localStorage.getItem("characterIndex"));
        index === null  ? fetchData(1) : fetchData(index);
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
            <div>
                <StyledButton
                    disabled={characterIndex <= 1}
                    onClick={()=>{
                    characterIndexDecrement();
                    setIsLoading(true);
                    }}>{isLoading ? "is loading..." : "<<<"}</StyledButton>
                #{characterIndex}
                <StyledButton onClick={()=>{
                    characterIndexIncrement();
                    setIsLoading(true);
                }}>{isLoading ? "is loading..." : ">>>"}</StyledButton>
            </div>
        </StyledRickMortyList>
    )

}

const StyledRickMortyList = styled.div`
background-color: white;
border-radius: 10px;
padding: 30px;

`;

const StyledButton = styled.button`
padding: 5px 40px;
color: white;
background-image: url("./images/Screenshot 2020-10-15 at 16.20.31.png");
font-weight: bold;
border-radius: 5px;
border-color: transparent;
margin: 10px;
`;
