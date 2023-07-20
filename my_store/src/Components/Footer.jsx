import { Container, HStack, Heading, VStack ,Text, Flex } from "@chakra-ui/react";
import React from "react";

const FooterPart = ()=>{

    return <Container  
    maxW={{base:"container.sm",md:"container.xl" }}
    bg="black" 
    color="gray" 
    borderRadius="15px"
    marginTop="10%"
    p="5%"
   
    >
            <Flex
            align="flex-start" 
            justifyContent="space-between" 
            w="full"
            alignItems="center"
            gap={4}
            direction={{
                base:"column",
                md:"row"
            }}
            
            >
            <VStack align="flex-start" gap={2}>
                <Heading>Customer servies</Heading>
                <Text>Contact us</Text>
                <Text>Delivery servies</Text>
                <Text>Purchese conditions</Text>
                <Text>Contacts</Text>

            </VStack>
            <VStack align="flex-start">
                <Heading>Customer servies</Heading>
                <Text>Contact us</Text>
                <Text>Delivery servies</Text>
                <Text>Purchese conditions</Text>
                <Text>Contacts</Text>

            </VStack>
            <VStack align="flex-start">
                <Heading>Customer servies</Heading>
                <Text>Contact us</Text>
                <Text>Delivery servies</Text>
                <Text>Purchese conditions</Text>
                <Text>Contacts</Text>

            </VStack>
            </Flex>
    </Container>
}

export {FooterPart};