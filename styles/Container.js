import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  margin-top: 75px;
  width: 70vw;
  max-width: 1100px;
  overflow: hidden;
  /* background: red; */
`;

export const H1 = styled.h1`
  font-size: clamp(2.25rem, 2vw, 3rem);
  margin-bottom: 20px;
  color: #fff;

  &:before {
    content: "";
    width: 3px;
    height: min(25px, 20px);
    background: #41b883;
    display: inline-block;
    margin-right: 5px;
  }
`;
