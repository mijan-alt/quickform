import React from "react";
import Form from "./components/Form";


import { Page } from "./components/styles/Page.styled";
import { GlobalStyle } from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Nav from "./Nav";
import { MainPage } from "./components/styles/MainPage.styled";
import { Image, Ellipse } from "./components/styles/MainPage.styled";
import Blur from "./components/styles/Blur";



const theme ={
  color: {
    nav: '#24FF00'

  },
  border:{
    form: '1px solid #f5f5f5'
  }
}

function App() {
  return (
    
    <ThemeProvider theme= {theme}>
      <>
      <GlobalStyle />
      <MainPage>
      <Page>
      <Nav/>

      <Form />
    
      
      </Page>
      <Image>
        <img src="./images/splash.png" alt="" />
        <Ellipse src="./images/Ellipse 7.png" alt="" />
        <Blur />
      </Image>
      

      
      </MainPage>


      

      
      </>
    </ThemeProvider>
      
    
  );
}






  


export default App;

