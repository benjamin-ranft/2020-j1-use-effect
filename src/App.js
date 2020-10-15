import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import RickMortyList from "./components/RickMortyList";
import Counter from "./components/Counter";

export default function App() {

    return (
      <>
        <GlobalStyle/>
        <Main>
            <RickMortyList></RickMortyList>
        </Main>
      </>
  );
}

const Main = styled.main`
  display: grid;
  place-items: center;
  height: 100vh;

`;