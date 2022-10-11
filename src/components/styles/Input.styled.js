import styled from "styled-components";

 export const Input= styled.input`
   height: 4.375rem;
   width: 25rem;
   border-radius: 0.625rem;
   border: ${({theme})=>theme.border.form};
   margin-top:2.1875rem;
   padding-left:1.5rem;

   &::placeholder {
   color: #5A5A5A;
   font-size: 0.875rem;
   font-weight: 400;
   line-height: 0.9375rem;

}


`;