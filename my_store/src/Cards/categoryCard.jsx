import { Container, VStack ,Image,Text} from '@chakra-ui/react'
import React from 'react'

const categoryCard = (props) => {
  console.log(props.title)
  return (
    <Container>
        {/* <VStack>
            <Image src={image} alt={title} />
            <Text>{title}</Text>
        </VStack> */}
    </Container>
  )
}

export default categoryCard