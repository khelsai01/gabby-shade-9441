import { Container, Flex, Hr, VStack, Image, Text, Heading, SimpleGrid, Button, Checkbox, Spacer } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom';
import ButtonClick from '../Components/Buttton';



const getUrl = (url, selectedCategory, pageNumber, orderby) => {
  if (orderby && selectedCategory) {
    return `${url}&_sort=price&_order=${orderby}&category=${selectedCategory}&_page=${pageNumber}`;
  } else if (orderby) {
    return `${url}&_sort=price&_order=${orderby}&_page=${pageNumber}`;
  }
  return `${url}&_page=${pageNumber}`;
};

const phoneCategory = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/6/x/j/-original-imaghxejqvpwfqh2.jpeg?q=70"

  },
  {
    id: 2,
    title: "iPhone 14",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70"

  },

  {
    id: 3,
    title: "iPhone 13 Pro",
    image: "https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/c/j/j/-original-imagca5hhzsgpycf.jpeg?q=70"

  },

  {
    id: 4,
    title: "iPhone 13",
    image: "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70"

  },

  {
    id: 5,
    title: "iPhone 12",
    image: "https://rukminim2.flixcart.com/image/312/312/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70"

  },

  {
    id: 6,
    title: "iPhone 11 Pro",
    image: "https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70"

  },

  {
    id: 7,
    title: "iPhone 11",
    image: "https://rukminim2.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/y/k/z/iphone-11-64-a-mwlx2hn-a-apple-0-original-imafkg24ymsjav9h.jpeg?q=70"

  },

  {
    id: 8,
    title: "iPhone SE",
    image: "https://rukminim2.flixcart.com/image/312/312/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfh4zznmq.jpeg?q=70"

  },



]

const IPhone = () => {

  const [Loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, setData] = useState([])
  const [orderby, setOrderBy] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  


  const product = async (pageNumber) => {

    const apiUrl = getUrl("http://localhost:8080/iphone?_limit=6", selectedCategory, pageNumber, orderby);

    setLoading(true);
    setisError(false);

    try {
      let res = await fetch(apiUrl);
      let newData = await res.json();

      setData(newData);
      setLoading(false);
      setisError(false);
    } catch (error) {
      console.log(error);
      setisError(true);
      setLoading(false);
    }

    // axios
    // .get(`http://localhost:8080/iphone?_page=1&_limit=6`)
    // .then((res)=>setData(res?.data))

    // .catch((err)=>console.log(err))

  }
  const getTotalPages = () => Math.ceil(3);

  const handleNextPage = () => {
    const totalPages = getTotalPages();
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    product(currentPage, orderby);
  }, [selectedCategory, currentPage, orderby]);


  useEffect(() => {

    let paramsObj = { currentPage }

    if(orderby){
      paramsObj.orderby = orderby
     paramsObj.sort ="price"
    }
    if (selectedCategory) {
      paramsObj.selectedCategory = selectedCategory
    }
    setSearchParams(paramsObj)
  }, [currentPage, orderby,"price", selectedCategory]);


  if (Loading) {
    return <Heading>Loading...</Heading>
  }

  if (isError) {
    return <Heading>Something is wrong please check .....</Heading>
  }
  return (
    <Container maxW={"container.xl"}>
      <VStack maxW={"lg"} m={"auto"} h={"auto"} my={"20px"} >

        <Flex>
          {phoneCategory.map((phone) => (
            <Container key={phone.id}>
              <VStack>
                <Image src={phone.image} alt={phone.title} />
                <Text color={"gray"} size={"sm"}>{phone.title}</Text>
              </VStack>
            </Container>
          ))}
        </Flex>

      </VStack>

      <hr />
      <Flex>
        <Button onClick={() => { setOrderBy("asc"); setCurrentPage(1) }}>Sort By Low to High Price</Button>
        <Spacer />
        <Button onClick={() => { setOrderBy("desc"); setCurrentPage(1) }}>Sort By High to Low Price</Button>

      </Flex>
      <br />

      <hr />
      <Heading color={"gray"} size="md">Apple iPhones</Heading>
      <Flex gap={"20px"} my={"20px"}>

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} m="auto" marginTop={"50px"}>
          {data?.map((iphone) => (

            <VStack key={iphone.id}>
              <Image src={iphone.image} />
              <Heading size="sm" color="gray" align="center">{iphone.title}</Heading>
              <Text> Rating: {iphone.rating}</Text>
              <Text>Price: {iphone.price}</Text>
              <Link to={`/iphone/${iphone.id}`}>
                <ButtonClick btnText={"Buy Now"}/>
              </Link>
            </VStack>
          ))}

         
        </SimpleGrid>
        <VStack border={"1px solid black"} w="xs">
          <Heading size="xs" color="gray">Filter</Heading>
          <VStack align="flex-start">
            <Heading size="xs" color="gray">Series</Heading>

            {phoneCategory.map((phone) => (
              <Checkbox
                key={phone.id}
                onClick={() => setSelectedCategory(phone.title)}
                isChecked={selectedCategory === phone.title}
              >
                {phone.title}
              </Checkbox>
            ))}
            {/* <Checkbox>iphone 14 pro max</Checkbox>
                  <Checkbox>iphone 14 pro</Checkbox>

                  <Checkbox onClick={()=>setFilter("iPhone 14")}>iphone 14</Checkbox>

                  <Checkbox>iphone 13 pro max</Checkbox>

                  <Checkbox>iphone 13</Checkbox>

                  <Checkbox>iphone 12</Checkbox>

                  <Checkbox>iphone 11 pro max</Checkbox>
                  <Checkbox>iphone 11 pro</Checkbox>
                  <Checkbox>iphone 11</Checkbox> */}

          </VStack>
          <VStack align="flex-start" marginLeft="-1px" >
            <Heading size={"sm"} color="gray">Memory</Heading>
            <Checkbox>64 GB</Checkbox>
            <Checkbox>128 GB</Checkbox>
            <Checkbox>256 GB</Checkbox>
            <Checkbox>512 GB</Checkbox>
            <Checkbox> 1 TB</Checkbox>


          </VStack>
        </VStack>
      </Flex>
      <Flex justify="center" my={4} m={"auto"}>
            <Button onClick={handlePreviousPage} disabled={currentPage === 1} bg="violet">
              <ArrowLeftIcon />
            </Button>

            <Button mx={4} borderRadius="50%" bg="violet">
              {currentPage}
            </Button>
            <Button onClick={handleNextPage} disabled={currentPage === getTotalPages()} bg="violet">
              <ArrowRightIcon />
            </Button>
          </Flex>
    </Container>
  )
}

export default IPhone