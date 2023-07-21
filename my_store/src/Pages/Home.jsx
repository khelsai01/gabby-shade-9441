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
import Cards from "../Cards/Cards";
import { FooterPart } from "../Components/Footer";
import { Link, Navigate } from "react-router-dom";
import ipad from "../images/ipad.png"
import iphone14pro from "../images/iphone14pro.png"
import airpods from "../images/airpods.png"
import Mac from "../images/Mac.png"
import watch_series_7 from "../images/watch_series_7.png"
import watch_series_7p from "../images/watch_series_7p.png"
import iphone14 from '../images/iphone14.png'
import applie_watch from "../images/apple_watch.png"
import iphone_14_pro from "../images/iphone_14_pro.png";
import moniter from "../images/moniter.png"
import watch from "../images/watch.png"






export const Home =()=>{

   const  products=[
        {
            title:"iPhone 14 Pro",
            price:"₹ 1,10,009",
            category:"BRAND NEW",
            image:iphone14pro

        },
        {
            title:"MacBook M1",
            price:"₹ 1,39,009",
            category:"11th GENERATION",
            image:Mac

        },
        {
            title:"Watch Series 7",
            price:"₹ 1,09,009",
            category:"NEW",
            image:applie_watch

        },
        {
            title:"Apple Watch Ultra",
            price:"₹ 1,20,000",
            category:"THE ADVENTURE AWAITS",
            image:watch_series_7p

        },
        {
            title:"AirPods Pro",
            price:"₹ 1,10,009",
            category:"BEST EVER",
            image:airpods

        },
        {
            title:"New ipad",
            price:"₹ 1,10,009",
            category:"NEW",
            image:ipad

        },

    ]
    return (
  
           <Container  maxW="container.xl" py="15px" m="auto" >
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
                           <Link to="/iphone">
                           <ButtonClick btnText={"Buy"} />
                           </Link>
                            <Text> From 1199 $</Text>
                           </HStack>
                        </VStack>
                  
                    <VStack>
                        <Image src={iphone_14_pro}  alt="iphone 14 pro"
                        />
                    </VStack>
                </Flex>
                <VStack align="flex-start" maxW="70%" >
                    <Heading size="lg">Buy new apple devices from the official reseller  </Heading>
                    <Flex justifyContent="space-between"
                        gap={3}
                        align="center"
                        margin="auto"
                        direction={{
                            base:"column",
                            md:"row"
                           
                        }}>
                        <VStack >
                            <Link to="/iphone">
                            <Image  src={iphone_14_pro}  />
                            <Heading size="md"color="gray" align="center" >iPhone</Heading>
                            </Link>
                        </VStack>
                        <VStack>
                            <Link to="/watch">
                                <Image  src={watch} />
                                <Heading size="md" color="gray" align="center">Watchs</Heading>
                            </Link>
                        </VStack>
                        <VStack>
                            <Link to="/mac">

                            <Image  src={moniter} />
                            <Heading size="md" color="gray" align="center">Desktop</Heading>
                            </Link>
                        </VStack>
                        <VStack >
                            <Link to="/airpods"  >
                            <Image  src={airpods} />
                            <Heading size="md" color="gray" align="center">AirPods</Heading>
                            </Link>
                        </VStack>
                        <VStack >
                           <Link to="/ipad" >
                           <Image  src={ipad} />
                            <Heading size="md" color="gray" align="center">iPads</Heading>
                           </Link>
                        </VStack>

                    </Flex>
                </VStack>
                <Divider orientation='vertical' />
                <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={10} my="50px">
                       
                            {products.map((pro,index)=>(
                                <Cards kry={pro.title} {...pro} />
                            ))}
                           
                </SimpleGrid>
                <Box w="75%" bg="white" align="center" h={{base:"49vh",md:"62vh"}} p="18px" m="auto"  borderRadius="10px" boxShadow='2xl'>
                    <Image src={iphone14}  />
                </Box>

               
           </Container>
      
    )
}