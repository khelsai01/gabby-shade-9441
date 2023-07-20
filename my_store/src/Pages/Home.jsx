import React from "react";
import
 { Heading ,
    Box, 
    Flex, 
    Text,
    SimpleGrid,
    Container,
    Footer,
    VStack,
    Button,
    HStack,
    Image,
    GridItem,
    Divider
    
} from "@chakra-ui/react";
import ButtonClick from "../Components/Buttton";
import Cards from "./Cards";
import { FooterPart } from "../Components/Footer";


export const Home =()=>{

   const  products=[
        {
            title:"iPhone 14 Pro",
            price:"₹ 1,10,009",
            category:"BRAND NEW",
            image:"/images/iphone14pro.png"

        },
        {
            title:"MacBook M1",
            price:"₹ 1,39,009",
            category:"11th GENERATION",
            Image:"/images/Mac.png"

        },
        {
            title:"Watch Series 7",
            price:"₹ 1,09,009",
            category:"NEW",
            Image:"/images/watch-series-7.png"

        },
        {
            title:"Apple Watch Ultra",
            price:"₹ 1,20,000",
            category:"THE ADVENTURE AWAITS",
            Image:"/images/apple-watch.png"

        },
        {
            title:"AirPods Pro",
            price:"₹ 1,10,009",
            category:"BEST EVER",
            Image:"/images/airpods-pro.png"

        },
        {
            title:"New Watchs",
            price:"₹ 1,10,009",
            category:"NEW",
            Image:"/images/watch.png"

        },

    ]
    return (
  
           <Container  maxW="container.xl">
                <Flex 
                justifyContent="space-between"
                gap={3}
                direction={{
                    base:"column-reverse",
                    md:"row"
                }}>
                 <VStack spacing={2} w="45%" p="15px" align="flex-start" marginLeft="100px">
                            <Text> New iPhone 14 Pro </Text>
                            <Heading align= "flex-start">IPhone 14 Pro
                                Is already on sale!
                            </Heading>
                          
                            <Text>Alluminium of aerospace class</Text>
                           <HStack alignContent="center">
                            <ButtonClick btnText={"Buy"} />
                            <Text> From 1199 $</Text>
                           </HStack>
                        </VStack>
                  
                    <VStack>
                        <Image src="images/iphone-14-pro.png"  alt="iphone 14 pro"
                        />
                    </VStack>
                </Flex>
                <VStack align="flex-start" maxW="70%" >
                    <Heading size="lg">Buy new apple devices from the official reseller  </Heading>
                    <Flex justifyContent="space-between"
                        gap={2}
                        align="center"
                        direction={{
                            base:"column",
                            md:"row"
                        }}>
                        <VStack >
                             <Image  src="images/heroPhone.png" />
                            <Heading size="md" align="center">iPhone</Heading>
                        </VStack>
                        <VStack>
                            <Image  src="images/watch.png"/>
                            <Heading size="md" align="center">Watchs</Heading>
                        </VStack>
                        <VStack>
                            <Image  src="images/moniter.png"/>
                            <Heading size="md" align="center">Desktop</Heading>
                        </VStack>
                        <VStack>
                            <Image  src="images/airpods-pro.png"/>
                            <Heading size="md" align="center">AirPods</Heading>
                        </VStack>
                        <VStack>
                            <Image  src="images/ipad.png"/>
                            <Heading size="md" align="center">iPads</Heading>
                        </VStack>

                    </Flex>
                </VStack>
                <Divider orientation='vertical' />
                <SimpleGrid columns={3} spacing={10} my="50px">
                       
                            {products.map((pro)=>(
                                <Cards kry={pro.title} {...pro}/>
                            ))}
                           
                </SimpleGrid>
                <Box w="75%" bg="white" m="auto" p="20px"   borderRadius="10px" boxShadow='2xl'>
                    <Image src="images/iphone14.png" align="center"/>
                </Box>

                <FooterPart />
           </Container>
      
    )
}