import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import Counter from "./components/Counter";

export default function App() {
    const [count,setCount] = useState(0);
    const countUp = () => setCount(count + 1);
    const countDown = () => setCount(count - 1);


    useEffect(() => {
        console.log("Main App rendered for the first time")
    }, []);

    useEffect(() => {
        if (count !== 0) {
            console.log("Count updated");
        }
        }, [count]);


    return (
      <>
        <GlobalStyle/>
        <Main>
                <Counter tooLarge ={ count >= 5}
                         tooSmall = {count <= -5}
                         count={count}
                         countUp={countUp}
                         countDown={countDown}/>
            }
        </Main>
      </>
  );
}

const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;
`;