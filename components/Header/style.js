import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: 0 auto;
  background-image: linear-gradient(rgba(65, 184, 131, 0.3), rgb(0, 0, 0)),
    url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  height: 500px;
`;

export const Infos = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 90%;
  display: flex;
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h2 {
    text-transform: uppercase;
    font-size: clamp(2.3rem, 2vw, 4rem);
  }
`;

export const SubInfoContainer = styled.div`
  display: flex;
  margin-top: 10px;

  span {
    margin-right: auto;
    font-size: clamp(1.5rem, 2vw, 2rem);
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 1px solid white;
    padding: 1rem 2rem;
    color: white;
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    font-weight: 700;
    transition: transform 0.3s ease;

    &:hover {
      background-color: #fff;
      border-color: transparent;
      background: #41b883;
      transform: scale(1.1);
    }
  }
`;
