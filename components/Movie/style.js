import styled from "styled-components";

export const MovieContainer = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: ${(props) =>
    props.wish
      ? "repeat(auto-fit, minmax(160px, 160px))"
      : "repeat(auto-fit, minmax(160px, 1fr))"};

  > div {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      display: block;
      top: 0;
      background-color: rgba(65, 184, 131, 0.2);
      transition: background-color 0.3s ease;
    }

    &:hover:after {
      background-color: rgba(65, 184, 131, 0);
    }
  }
`;

export const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* transition: transform 0.3s ease; */

  &:hover {
    transform: scale(1.2);
  }
`;
