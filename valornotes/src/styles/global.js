import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
}

body, input, button, textarea{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;

}

a {
    text-decoration: none;
    cursor: pointer;
    transition: filter 0.2s;
}

button{
    cursor: pointer;
    transition: filter 0.2s;
    border: 0;
}

button:hover, a:hover{
    filter: brightness(0.8);
}

h1 {
    font-weight: 900;
}

h2, h3{
    font-weight: 400;
}
`;