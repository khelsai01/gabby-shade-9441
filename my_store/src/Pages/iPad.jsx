import { Container, Flex, VStack, Image,Text, Heading ,SimpleGrid} from '@chakra-ui/react'
import React,{ useEffect, useState} from 'react';


 const IPad = () => {

  const [ipaddata ,setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);


 const product =async()=>{
   setLoading(true)
   setisError(false)
   // const apiUrl = getUrl(`http://localhost:8080/ipad`)
   try {
     let res = await fetch(`http://localhost:8080/ipad`)
     let data = await res.json();
     setData(data)
     setLoading(false)
     setisError(false)
   } catch (error) {
     console.log(error)
     setisError(true)
     setLoading(false)
     
   }
   
   // axios
   // .get(`http://localhost:8080/iphone?_page=1&_limit=6`)
   // .then((res)=>setData(res?.data))

   // .catch((err)=>console.log(err))
 };

 useEffect(()=>{
   product()
 },[])

 if(Loading){
   return <Heading>Loading...</Heading>
 }

 if(isError){
   return <Heading>Something is wrong please check .....</Heading>
 }
 return (
   <Container>
       <Flex>
         <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={10} m="auto" marginTop={"50px"}>
           {ipaddata?.map((ipad)=>(
            
             <VStack key={ipad.id}>
               <Image src ={ipad.image}/>
               <Heading size="sm" color="gray" align="center">{ipad.title}</Heading>
               <Text> Rating: {ipad.rating}</Text>
               <Text>Price: {ipad.price}</Text>
             </VStack>
           ))}
         </SimpleGrid>
       </Flex>
   </Container>
 )
}

export default IPad