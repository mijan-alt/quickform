import styled from 'styled-components';

export const MainPage = styled.div`

    width: 100%;
    height: 100vh;
    margin: 0 auto;
    position:relative;
 `

 export const Image = styled.div`
      position: absolute;
      right:0;
      top:0;
      width: 642px;
      height: 100vh;

      img {
          width: 100%;
          height: 100%;
      }
 `

 export const Ellipse = styled.img`
      position: absolute;
      width: 353px;
      height: 353px;
      bottom: 40px;
      left: 798px;
     

 
 `;

 export const StyledBlur= styled.div`
    position: absolute;
    height: 270px;
    width: 547px;
    left: 59px;
    bottom: 43px;
    border-radius: 10px;

    
   background: rgba(255, 242, 242, 0.13);
   mix-blend-mode: normal;
   backdrop-filter:blur(50px);
   border-radius: 10px;
   color: #FFF2F221;

   div {
     display: flex;
     align-items:center;
     background: #20DC49;
     color:black;
     padding:14px 14px 14px 17px;
     font-family:"Roboto";
     border-radius: 10px;
     margin-top:42px;
     margin-left: 37px;
     width: 238px;

     span:last-child {
          margin-left: 11.95px;
          font-weight: 400;
          font-size: 14px;

     }

     span:first-child{
          
          
          img {
               width:22.05px;
               height:22.05px;
          }
     }




   }

   p{

   margin:25px 57px 59px 37px;
   font-size: 20px;
   font-weight: 400;
   line-height: 33px;
   width: 453px;
   color: #FFFFFF;



   }




 `;