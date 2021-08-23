const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
* {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'Noto Sans JP', sans-serif;
    }

body {
    background: black;
    color: white;
}
`;
