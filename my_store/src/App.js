
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import {AllRoutes} from "./Components/AllRoutes"
import { Home } from './Pages/Home';
import { Container } from '@chakra-ui/react';
import { FooterPart } from './Components/Footer';

function App() {
  return (
   <Container maxW="full" bgGradient='linear(red.50 0%, orange.50 25%, green.50 50%)' paddingBottom="30px" >
    <Navbar maxW="full" />
    <AllRoutes />
    <FooterPart />
   </Container>
  );
}

export default App;
