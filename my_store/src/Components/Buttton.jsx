import React from "react";
import { Button, background } from "@chakra-ui/react";

 const ButtonClick =({handleChlick ,btnText})=>{

    
    return <>
    <Button onChlick={handleChlick} style={{backgroundColor:"blue"}} > {btnText}</Button>
    </>
 }

 export default ButtonClick