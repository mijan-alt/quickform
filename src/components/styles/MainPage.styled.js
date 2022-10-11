import styled from 'styled-components';

export const MainPage = styled.div`
    display:flex;
    width: 100%;
    height: 900px;

 `

 export const Image = styled.div`
      position:relative;
      width: 642px;
      height: 900px;

      

      img:nth-child(1) {
     
          position:absolute;
          top:0;
          bottom:0;
          right:0;
          width: 100%;
      }

          
     img:nth-child(2) {
     
      position: absolute;
      width: 353px;
      height: 353px;
      bottom: 40px;
      right: 343px;
     
 } 


 `;
     
      
 

 export const StyledBlur= styled.div`
    position: absolute;
    height: 270px;
    width: 547px;
    right: 59px;
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


     
     span:first-child{
          
          
          .thumbs {
               position:static;
               width:22.05px;
               height:22.05px;
          }
     }


     span:last-child {
          margin-left: 11.95px;
          font-weight: 400;
          font-size: 14px;

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