import { Container, VStack,Text, Heading, Button,Image } from "@chakra-ui/react";
import React from "react";
import ButtonClick from "../Components/Buttton";


const Cards=({title,price, image,category})=>{
    return <Container>
            <VStack 
            boxSize="350px" 
            bg="white"
            borderRadius="10px" 
            boxShadow='2xl'
            p="15px"
            >
                <Text color="gray.500">{category}</Text>
                <Heading color="gray">{title}</Heading>
                <Text>{price}</Text>
                <ButtonClick btnText="BUY" />
                <Image src={{image}}/>
            </VStack>
    </Container>
}

export default Cards