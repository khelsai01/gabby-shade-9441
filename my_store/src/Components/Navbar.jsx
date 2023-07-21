import React from "react";
import { NavLink  } from "react-router-dom";
import { Box ,Image, Flex, Heading, Container, HStack} from "@chakra-ui/react"



const Navbar =()=>{
    
    const links = [
        {
            id:1,
            title:"Home",
            path: "/"
        },
        {
            id:2,
            title:"iPhone",
            path: "/iphone"
        },
        {
            id:3,
            title:"Mac",
            path: "/mac"
        },
        {
            id:4,
            title:"Watch",
            path: "/watch"
        },
        {
            id:5,
            title:"AirPods",
            path: "/iphone"
        },
        {
            id:6,
            title:"Eccessories",
            path: "/watch"
        }

    ]
    const activeStyle ={
        textDecoration : "none",
        color:"yellow"
    }
    
    const DefaultStyle ={
        textDecoration :"none",
        color:"whitesmoke"
    }

    return <Container maxW="full" bg="gray" p="10px" >
        <Flex style={{display:"flex" ,justifyContent:"space-around"}} gap={5}>
            <Image src="logo.png"  boxSize="50px"/>
            <HStack>
                {links.map((link)=>(
                    <NavLink key={link.id} to={link.path}
                    style={
                    ({isActive})=>{ return isActive ? activeStyle:DefaultStyle}}
                    >
                        {link.title}
                    </NavLink>
                ))}
            </HStack>
            <HStack>

            </HStack>
        </Flex>
    </Container>
    
}

export default Navbar

