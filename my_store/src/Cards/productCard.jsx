import React from 'react'
import { Box, Container, Image, Text, VStack } from '@chakra-ui/react'

const productCard = ({title, rating,storage,camera,id,price,image}) => {
    
    return  <Container>
            <Box>
                <VStack>
                    {/* <Image src={image}/> */}

                    <Text>{title}</Text>
                    
                </VStack>
            </Box>
  
      </Container>
    
  
}

export default productCard