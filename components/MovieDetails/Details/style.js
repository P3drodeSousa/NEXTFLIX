import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 25px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Genre = styled.span`
  font-size: clamp(1.5rem, 2vw, 1.6rem);
  color: #686868;
  margin-right: 5px;
`;

export const Review = styled.span`
  font-size: clamp(1.5rem, 2vw, 1.6rem);
  color: #686868;
  margin-left: 5px;
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-size: clamp(1.5rem, 2vw, 3rem);
  margin-top: 15px;
`;

export const P = styled.p`
  margin-top: 20px;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  line-height: 180%;
`;

export const Info = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  color: #686868;
  font-size: clamp(2rem, 2vw, 2.5rem);
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  margin: 50px auto;
  display: block;
  border: none;
  background: #19181a;
  padding: 10px 20px;
  text-transform: uppercase;
  color: #fff;
  font-size: clamp(1.4rem, 2vw, 1.5rem);
  border-radius: 20px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
