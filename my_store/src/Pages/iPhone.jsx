import { Container, Flex, VStack, Image,Text, Heading ,SimpleGrid} from '@chakra-ui/react'
import React, { useEffect } from 'react';
import {useState} from "react";
import axios from "axios"
import productCard from '../Cards/productCard';
import { useSearchParams } from 'react-router-dom';



const getUrl =(url)=>{

}


const phoneCategory =[
  {
      id:1,
      title:"iPhone 14 Pro",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/j/-original-imaghxejqvpwfqh2.jpeg?q=70"

  },
  {
      id:2,
      title:"iPhone 14",
      image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"

  },

  {
      id:3,
      title:"iPhone 13 Pro",
      image:"https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/c/j/j/-original-imagca5hhzsgpycf.jpeg?q=70"

  },

  {
      id:4,
      title:"iPhone 13",
      image:"https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70"

  },

  {
      id:5,
      title:"iPhone 12",
      image:"https://rukminim2.flixcart.com/image/312/312/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70"

  },

  {
      id:6,
      title:"iPhone 11 Pro",
      image:"https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70"

  },

  {
      id:7,
      title:"iPhone 11",
      image:"https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/y/k/z/iphone-11-64-a-mwlx2hn-a-apple-0-original-imafkg24ymsjav9h.jpeg?q=70"

  },

  {
      id:8,
      title:"iPhone SE",
      image:"https://rukminim2.flixcart.com/image/312/312/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfh4zznmq.jpeg?q=70"

  },



]

const IPhone = () => {
 
  const [Loading, setLoading] = useState(false);
   const [isError, setisError] = useState(false);
  const [data ,setData] =useState([])
  // const[currPage , setPage] = useState(1)
  // const [searchParams , setSearchParam] = useSearchParams()
  // const [orderBy, setOrderBy] = useState("");
  // const [filter, setFilter] = useState();

  // const sort ="price";

  const product =async()=>{
    setLoading(true)
    setisError(false)
    // const apiUrl = getUrl(`http://localhost:8080/iphone`)
    try {
      let res = await fetch(`http://localhost:8080/iphone`)
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
  }

  useEffect(()=>{
    product()
  },[])

  // useEffect(()=>{

  // },[])

  if(Loading){
    return <Heading>Loading...</Heading>
  }

  if(isError){
    return <Heading>Something is wrong please check .....</Heading>
  }
  return (
    <Container>
        <VStack>
          <Flex>
            {phoneCategory.map((phone)=>(
            <Container m="auto">
                <VStack>
                <Image src={phone.image} alt={phone.title} />
                <Text>{phone.title}</Text>
              </VStack>
            </Container>
            ))}
          </Flex>
          
        </VStack>
        <Flex>
          <SimpleGrid columns={{sm:1,md:2,lg:3}} spacing={10} m="auto" marginTop={"50px"}>
            {data?.map((iphone)=>(
             
              <VStack>
                <Image src ={iphone.image}/>
                <Heading size="sm" color="gray" align="center">{iphone.title}</Heading>
                <Text> Rating: {iphone.rating}</Text>
                <Text>Price: {iphone.price}</Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Flex>
    </Container>
  )
}

export default IPhone