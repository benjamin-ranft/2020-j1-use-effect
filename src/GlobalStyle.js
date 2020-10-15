import {createGlobalStyle} from 'styled-components'
import backgroundimage from "./images/zOrHWVE.jpg"

export default createGlobalStyle`
  :root {
    --nf-blue: #193251;
    --nf-orange: #ff5a36;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-size: 112.5%;
    margin: 0;
    font-family: sans-serif;
    background-image: url("${backgroundimage}");
  }

  button {
    font-size: 1em;
  }
  
  
`;