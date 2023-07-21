import { Container, Flex, VStack, Image,Text, Heading } from '@chakra-ui/react'
import React from 'react';



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
 
  return (
    <Container>
        <VStack>
          <Flex>
            {phoneCategory.map((phone)=>(
            <Container>
                <VStack>
                <Image src={phone.image} alt={phone.title} />
                <Text>{phone.title}</Text>
              </VStack>
            </Container>
            ))}
          </Flex>
        </VStack>
    </Container>
  )
}

export default IPhone