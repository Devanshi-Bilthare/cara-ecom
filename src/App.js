import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/SingleProduct";
import Error from "./Pages/Error";
import { GlobalStyle } from "./Components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const theme = {
    colors:{
      heading:"#222",
      text:"#465b52",
      white:"#fff",
      black:"#212529",
      helper:"#088178",


      bg:"#E3E6F3",
      footer_bg:"#0a1435",
      btn:"rgb(98 84 283)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98,189,252) 100%)",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px ,rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media:{
      mobile:"768px",
      tab:"998px",
    }

  }

  return (
    <>
     <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/sproduct/:id" element={<SingleProduct/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
    </ThemeProvider>
    {/* <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
          <Route path="*" element={<Error/>} />
          </Routes>
    </BrowserRouter>
    </ThemeProvider> */}
    </>
   
  );
}

export default App;
