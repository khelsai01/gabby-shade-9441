import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContentProvider";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  TagLabel,
  VStack,
  Image,
  HStack
} from "@chakra-ui/react";
import logo from "../images/logo.png"

const Login = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <Container maxW={"container.lg"} margin={"auto"} my="3%">
        <Flex gap={5} direction={{base:"column" , md:"row" }} >
            <VStack w="48%" h={"80vh"} p="10px"  boxShadow='xl' rounded='md'>
                <HStack >
                <Image src={logo} w="150px" />
                <Heading size={"md"} color={"olivedrab"}>New User Register here</Heading>
                </HStack>
                <VStack>
                <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='First name' type="name" />
                    <FormLabel>Last name</FormLabel>
                    <Input placeholder='Last name' type="name" />
                    <FormLabel>Email</FormLabel>
                    <Input placeholder='Enter email here' type="email" />
                    <FormLabel>Passowrd</FormLabel>
                    <Input placeholder='password' type="password"/>
                    <Button mt={4} colorScheme="teal" type="submit">Register</Button>

                </FormControl>
                </VStack>
            
            </VStack>
            <VStack p="10px" w="48%" boxShadow='xl' rounded='md' >
            <Image src={logo} w="150px" />
                <Heading size={"md"} color={"olivedrab"}>User Login</Heading>
                {isLoggedIn ? (
                <Box >
                    <Heading size="md">Welcome, {username}!</Heading>
                    <Button mt={4} onClick={() => logout()}>
                    Logout
                    </Button>
                </Box>
             ):
             (
                      <form onSubmit={handleLogin}>
                        <FormControl>
                          <FormLabel>Username</FormLabel>
                          <Input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </FormControl>
                        <FormControl mt={4}>
                          <FormLabel>Password</FormLabel>
                          <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </FormControl>
                        <Button mt={4} colorScheme="teal" type="submit">
                          Login
                        </Button>
                      </form>
                    )}
            </VStack>
        </Flex>
    </Container>
   
  );
};

export default Login;
