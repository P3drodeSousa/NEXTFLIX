import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 90%;
  top: 0;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  position: fixed;
  padding: 1.5rem 0;
  z-index: 9999;
  overflow: hidden;
`;

export const MenuItem = styled.a`
  font-size: clamp(2.2rem, 2vw, 3rem);
  color: #41b883;
  font-weight: 700;
  margin-right: auto;
  cursor: pointer;
`;

export const ALink = styled.a`
  font-size: clamp(1.6rem, 2vw, 2rem);
  color: #fff;
  margin-right: left;
  cursor: pointer;

  &:hover {
    color: #b9f7db;
  }
`;
