import React from "react";
import { NavLink  } from "react-router-dom";
import { Box ,Image, Flex, Heading} from "@chakra-ui/react"



const Navbar =()=>{
    const logo = "https://drive.google.com/file/d/1RNvNUyl7Ok4jDaqqFuhQyt41xZiNkynD/view?usp=drive_link"
    const links = [
        {
            title:"Home",
            path: "/"
        },
        {
            title:"iPhone",
            path: "/iphone"
        }
        // {
        //     title:"Mac",
        //     path: "/mac"
        // },
        // {
        //     title:"Watch",
        //     path: "/watch"
        // },
        // {
        //     title:"AirPods",
        //     path: "/airpods"
        // },
        // {
        //     title:"Eccessories",
        //     path: "/eccessories"
        // }

    ]

    return (
    <Flex>
        <Box>
            <NavLink to="/">
                <Image src={logo}  className="Logo" alt="my store"/>
            </NavLink>
        </Box>
        <Box>

            
           {links.map((link)=>(
            <NavLink to={link.path}>{link.title}</NavLink>
           ))}
          
       
        </Box>
   </Flex>
    )
}

export default Navbar