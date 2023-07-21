import { Container, VStack,Text, Heading, Button,Image, Box } from "@chakra-ui/react";
import React from "react";
import ButtonClick from "../Components/Buttton";


const Cards=({title,price, image,category ,index})=>{

    return <Container >
            <VStack 
             boxSize="90%"
            bg="black"
            borderRadius="10px" 
            boxShadow='2xl'
            p="15px"
         
             
            >
            <VStack h="40%" gap={1}>
            <Text color="gray.500" size="sm" >{category}</Text>
                <Heading color="gray" size="md">{title}</Heading>
                <Text color="gray" size="sm">{price}</Text>
                <ButtonClick btnText="BUY" />
            </VStack>
                <Image src={image} alt={title} boxSize="55%" h="45%" mt="5%"/>
            </VStack>
    </Container>
}

export default Cards