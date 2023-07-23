import { Container, Flex, VStack, Image,Spacer, Text, Heading, Button, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import ButtonClick from '../Components/Buttton';

const getUrl = (url, selectedCategory, pageNumber, orderby) => {
  if (orderby && selectedCategory) {
    return `${url}&_sort=price&_order=${orderby}&category=${selectedCategory}&_page=${pageNumber}`;
  } else if (orderby) {
    return `${url}&_sort=price&_order=${orderby}&_page=${pageNumber}`;
  }
  return `${url}&_page=${pageNumber}`;
};

const Watchs = () => {
  const [Loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const [ipaddata, setData] = useState([])
  const [orderby, setOrderBy] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  const sortby = "price"
  const product = async (pageNumber) => {

    const apiUrl = getUrl("http://localhost:8080/watch?_limit=6",
      selectedCategory,
      pageNumber,
      orderby,
    );

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

  }

  const getTotalPages = () => Math.ceil(9 / 6);

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

    if (orderby) {
      paramsObj.orderby = orderby
      paramsObj.sort = "price"
    }
    if (selectedCategory) {
      paramsObj.selectedCategory = selectedCategory
    }
    setSearchParams(paramsObj)
  }, [currentPage, orderby, "price", selectedCategory]);

  if (Loading) {
    return <Heading>Loading...</Heading>
  }

  if (isError) {
    return <Heading>Something is wrong please check .....</Heading>
  }
  return (
    <Container maxW={"container.lg"}>

      <VStack >

        <hr />
        <Flex justifyContent={"space-between"} maxW={"xl"}>
          <Button onClick={() => { setOrderBy("asc"); setCurrentPage(1); }}>
            Sort By Low to High Price
          </Button>
          <Spacer />
          <Button onClick={() => { setOrderBy("desc"); setCurrentPage(1); }}>
            Sort By High to Low Price
          </Button>
        </Flex>
        <br />

        <hr />
      </VStack>
      <Flex>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} m="auto" marginTop={"50px"}>
          {ipaddata?.map((watch) => (

            <VStack key={watch.id}>
              <Image src={watch.image} />
              <Heading size="sm" color="gray" align="center">{watch.title}</Heading>
              <Text> Rating: {watch.rating}</Text>
              <Text>Price: {watch.price}</Text>
              <Link to={`/watch/${watch.id}`}>
                <ButtonClick btnText={"Buy Now"}/>
              </Link>
            </VStack>
          ))}
        </SimpleGrid>
      </Flex>
      <Flex justify="center" my={4}>
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

export default Watchs