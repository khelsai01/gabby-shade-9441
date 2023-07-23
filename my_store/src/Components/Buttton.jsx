import React from "react";
import { Button,} from "@chakra-ui/react";

 const ButtonClick =({btnText})=>{
    
    return <>
    <Button w="100px" bg={"#2F855A"}  color={"#171923"} > {btnText}</Button>
    </>
 }

 export default ButtonClick