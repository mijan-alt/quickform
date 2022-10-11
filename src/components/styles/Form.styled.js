
import styled from "styled-components";

export const StyledForm= styled.div`
   width: 100%;

`;

export const MainContainer = styled.div`
   margin-top: 2rem;
   display: flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;

   div:nth-child(3){
      display: flex;
      align-items:center;
      justify-content:center;
      margin-top:2.3125rem;
      gap: 11px;

      p{
         margin:0;
         
       font-size: 0.8125rem;
       font-weight: 400;
       line-height: 0.9375rem;
   

      }
   }



  h2, h3 {
   text-align: center;
  } 
  h2{
   font-size: 36px;
   font-weight: 600;
   line-height: 44px;



  }
  h3 {
   font-size: 18px;
   font-weight: 400;
   line-height: 29px;




  }


`;

export const Remember = styled.div`
   display:flex;
   align-items: center;
   justify-content:center;
   gap: 132px;
   margin-left: 60px;
   margin-top:23px;

   p:first-child {
      color: #1A1A1A;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.25rem;
      



   }

   p:last-child {
      color: #D93F21;
     font-size: 0.875rem;
    font-weight: 300;
    line-height: 0.9375rem;
    justify-self:flex-end;


    





   }

`

export const Button = styled.button`
 background: #24FF00;
 color: #1B1C31;
 height: 3.4375rem;
width: 25rem;
border-radius: 0.625rem;
border: ${({theme})=> theme.border.form};
margin-top:2.1875rem;


font-size: 18px;
font-weight: 400;
line-height: 15px;

&:hover {
   transform: scale(0.9);
}









`

export const HorizontalRule = styled.hr`
width: 130px;
border: 1px solid #f5f5f5;
`;

