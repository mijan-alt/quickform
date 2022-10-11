
import styled from "styled-components";

export const StyledSocialIcons= styled.div`
   display:flex;
   align-items:center;
   justify-content: center;
   gap: 14px;
   margin-top:38px;

   div:first-child{

     a {
      img{
        width:17px;
        height: 17px;
      }
     }

   }


   a {
      display:flex;
      align-items:center;
      padding: 0.2rem 0.5rem;
      text-decoration: none;
      border: ${({theme})=>theme.border.form};

    

      

     span{
      font-weight: 500;
      color:black;
      margin-left: 0.5rem;
      font-size: 0.75rem;
      text-align:center;
   



     }
   }

`
