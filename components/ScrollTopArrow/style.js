import styled from 'styled-components';
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   right: -85%;
   bottom: 80px;
   height: 100px;
   font-size: 100px;
   z-index: 1;
   cursor: pointer;
   color: white;
   animation-name: bounce;
   animation-duration: 2s;
   animation-iteration-count: infinite;
   animation-timing-function: ease;

   @media screen and (max-width: 768px){
      right: -80%;
   }

   @keyframes bounce {
    0%   { transform: translateY(0); }
    30%  { transform: translateY(-30px); }
    50%  { transform: translateY(0); }
    100% { transform: translateY(0); }
}


   `