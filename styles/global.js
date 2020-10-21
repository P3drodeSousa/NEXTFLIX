const { createGlobalStyle } = require("styled-components");

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');
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
