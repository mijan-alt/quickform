

import styled from 'styled-components';

export const StyledNav = styled.nav`
   width: 100%;
   background: white;
   padding:0.7rem 2rem;
       
   

`;



export const Logo = styled.div`
width: 109.55px;

  span.quick {
    color: #1B1C31;
    font-weight: 700;
    font-size:42.96px;
    

 }

 span.baya {
    color: ${({theme})=>theme.color.nav};
   font-size: 43px;
   font-weight: 700;
   line-height: 59px;


    



 }


`



export const Sign = styled.div`


 span.have-account {
   color:black;
   font-size: 14px;
   font-weight: 300;
   line-height: 15px;
   


 }
 span.sign-up {
    color: ${({theme})=> theme.color.nav};

   font-size: 14px;
   font-weight: 500;
   line-height: 15px;

   &:hover {
    color: #24FF00;
    cursor: pointer;
   }


 }

`
