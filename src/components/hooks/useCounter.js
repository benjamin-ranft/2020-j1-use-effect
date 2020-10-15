import {useState} from "react";

export default function useCounter(startIndex){
    const [characterIndex, setCharacterIndex] = useState(startIndex);
    const characterIndexIncrement = () => {setCharacterIndex(characterIndex +1)};
    const characterIndexDecrement = () => {setCharacterIndex(characterIndex-1)};
    return [characterIndex, characterIndexIncrement, characterIndexDecrement];
}