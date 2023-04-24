import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Helvetica", "Arial", sans-serif;
        line-height: 1.5;
    }
    ul{
        list-style:none;
        margin:0;
        padding:0;
    }
`;

export default GlobalStyle;
