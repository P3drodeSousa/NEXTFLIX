import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  margin-top: 75px;
  width: 100%;
  max-width: 1100px;
  overflow: hidden;
  padding: 0 15px;
`;

export const H1 = styled.h1`
  font-size: clamp(2.25rem, 2vw, 3rem);
  margin-bottom: 20px;
  color: #fff;

  span {
    font-size: clamp(2.25rem, 2vw, 3rem);
    color: #41b883;
  }

  &:before {
    content: "";
    width: 3px;
    height: min(25px, 20px);
    background: #41b883;
    display: inline-block;
    margin-right: 5px;
  }
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: clamp(2rem, 2vw, 2.75rem);
  margin-top: 60px;
`;
