import React from "react";
import { NavLink  } from "react-router-dom";
import { Box ,Image, Flex, Heading, Container, HStack , Spacer} from "@chakra-ui/react"
import {ShoppingCart} from "@chakra-ui/icons"
import logo from "../images/logo.png"
 

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
            title:"iPads",
            path: "/ipad"
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

    return <Container maxW="full" bg="gray" py="10px" px="20px" >
        <Flex style={{display:"flex" ,justifyContent:"space-around"}} gap={5}>
            <NavLink to="/">
                <Image src={logo}  boxSize="50px"/>
            </NavLink>
            <HStack style={{display:"flex" ,justifyContent:"space-around"}} gap={5}>
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
                       <NavLink to="/cart" style={{size:"18px",color:"whitesmoke"}}>Cart</NavLink>
                       <Spacer />
                        <NavLink to="/login" style={{size:"18px",color:"whitesmoke"}}>LogIn</NavLink>

            </HStack>
        </Flex>
    </Container>
    
}

export default Navbar

