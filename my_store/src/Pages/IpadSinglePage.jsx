import { Container, Heading, Image, VStack ,Text, Box,Flex, Button, HStack, SimpleGrid, GridItem} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../AuthContent/AuthContentProvider"
import Cart from "./Cart";

const IpadSinglePage=({addToCart})=>{

    const {id} = useParams();

    const[product, setProduct] = useState({});
    const [Loading, setLoading] = useState(false);
    const [isError, setisError] = useState(false);
    const {isLoggedIn} = useContext(AuthContext)

    const Productdata =async(id)=>{
        setLoading(true)
        try {
            let res = await fetch(`http://localhost:8080/ipad/${id}`)
            let data = await res.json();

            setProduct(data)
            setLoading(false)
            setisError(false)
          
            
        } catch (error) {
            setisError(true)
            setLoading(false)
            throw new Error(`Something is wrong you Code.......`)
        }
    } 


    useEffect(()=>{
        Productdata(id) 
    },[])

    const handleAddToCart=()=>{

      if(isLoggedIn){
        addToCart(product)

      }
      else {
        <Navigate path="/login" />
      }
    }

    return <Container 
    maxW={"container.lg"}>
        <Flex justifyContent={"space-evenly"}
         align={"flex-start"}
         bgGradient={'linear(to-br, green.50, gray.100,yellow.50)'}
         direction={{base:"column" ,md:"row"}} m={"auto"}
         >
            <Box
            
            w="45%" 
            h="430px"
            align="center"
            p="20px"
            m="auto"

               >
                <Image src={product.image} w="70%" borderRadius={"18px"}/>
            </Box>

        <VStack align={"flex-start"} 
       
         w="45%" 
         p="10px"
         h="430px"
         >
            <Heading size="sm" color="chocolate" >{product.title}</Heading>
            <Text>Price:- {product.price}</Text>
            <Text>off:- {product.off}</Text>
            <Text> discountPrice:- {product.discountPrice}</Text>
            <Text>rating:- {product.rating}</Text>
            <Text>{product.camera}</Text>
            <Text>{product.torage2}</Text>
            <Text>{product.storage}</Text>

            <Text>{product.storage5}</Text>
            <Button bg="gray.300" 
            _hover={{border:"2px solid #9DECF9", bg:"#FFF5F7"}}
            onClick={handleAddToCart}
            >Buy Now</Button>
        </VStack>
        </Flex>
        <VStack>
            <Box 
            size="200*20" 
            bg="black" 
            py="5px" 
            px="20px" 
            color="white" 
            borderRightRadius={"20px"} 

            >More about the Products</Box>
           <HStack>
           <Text w="50%" align={"left"}>
            As part of our efforts to reach carbon neutrality by 2030, iPhone 14 and iPhone 14 Plus do not include a power adapter or EarPods. Included in the box is a USB‑C to Lightning Cable that supports charging and is compatible with USB‑C power adapters and computer ports.
            <HStack gap={5} m="auto">
            <Image src={product?.avatar1}/>
            <Image src={product?.avatar4} />

            </HStack>
            
            </Text>
           </HStack>

        </VStack>
      <HStack gap={10}>
        <Box
          size="200*20"
          bg="black"
          py="5px"
          px="20px"
          color="white"
          my="20px"
          borderRightRadius={"20px"}

        >
          Specifications
        </Box>
      <VStack align={"flex-start"}>
        <Text>{product.camera}</Text>
        <Text>{product.storage}</Text>

        <Text>{product.storage2}</Text>

        <Text>{product.storage4}</Text>
        <Text>{product.storage5}</Text>

        <Text>{product.reviews}</Text>
        <Text>{product.totalRating}</Text>




      </VStack>
      </HStack>

      <VStack>
        <Box
          size="200*20"
          bg="black"
          py="5px"
          px="20px"
          color="white"
          borderRightRadius={"20px"}
        >
          More
        </Box>
       <SimpleGrid columns={{base:1,md:2}} gap={10}>
       <Image src={product.avatar2} />
       <Image src={product.avatar4} />

       <Image src={product.avatar3} />
       <Image src={product.avatar1} />
       <Image src={product.video} />

       
       </SimpleGrid>
      </VStack>

      <VStack>
        <Box
          size="200*20"
          bg="black"
          py="5px"
          px="20px"
          color="white"
          borderRightRadius={"20px"}
        >
          More Information
        </Box>
        <Text w="100%" align={"left"} px="20px">
         
We encourage you to re‑use your current USB‑A to Lightning cables, power adapters and headphones that are compatible with these iPhone models. But if you need any new Apple power adapters or headphones, they are available for purchase.
        </Text>
      </VStack>
    </Container>
}

export default IpadSinglePage;