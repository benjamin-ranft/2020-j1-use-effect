import React from 'react'
import styled from "styled-components/macro";

export default function Counter({tooLarge, tooSmall, count,countUp,countDown}) {
    return <StyledCounter>
        <h1>Count: {count}</h1>
        <div>
            <button disabled ={ tooSmall} onClick={countDown}>count down</button>
            <button disabled ={ tooLarge }onClick={countUp}>count up</button>
        </div>
    </StyledCounter>
}

const StyledCounter = styled.section`
  h1 {
    color: white;
    text-align: center;
  }
  
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  
  button {
    padding: 8px;
    background: none;
    border: 2px solid var(--nf-orange);
    border-radius: 8px;
    color: var(--nf-orange);
    text-transform: uppercase;
  }
`;
