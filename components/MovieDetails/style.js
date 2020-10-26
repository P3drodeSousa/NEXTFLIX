import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/Ai";

export const Drawer = styled.div`
  background: black;
  width: 640px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999999;
  transform: ${(props) =>
    props.drawer ? "translateX(0px)" : "translateX(640px)"};
  transition: all 0.3s ease-in-out;
  color: white;
`;

export const Icon = styled(AiOutlineCloseCircle)`
  width: 45px;
  height: 45px;
  color: white;
  margin: 15px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
