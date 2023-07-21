
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import {AllRoutes} from "./Components/AllRoutes"
import { Home } from './Pages/Home';
import { Container } from '@chakra-ui/react';

function App() {
  return (
   <Container maxW="full" bgGradient='linear(red.50 0%, orange.50 25%, green.50 50%)' >
    <Navbar maxW="full" />
    <AllRoutes />
   </Container>
  );
}

export default App;
