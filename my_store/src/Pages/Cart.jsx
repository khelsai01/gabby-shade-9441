// CartPage.js
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContent/AuthContentProvider";
import { Box,VStack, Heading, Text } from "@chakra-ui/react";
import { SingleProducts } from "./SIngleProducts";


const Cart = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {

      updatedCartItems[existingItemIndex].quantity += 1;
    } else {

      updatedCartItems.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };
console.log(cartItems)
  return (
    <Box maxW={"container.lg"} mt={4}>
      {isLoggedIn ? (
        <>
          <Heading size="lg" mb={4}>
            Cart
          </Heading>
          {cartItems.length > 0 ? (
            <VStack spacing={4} align="stretch">
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  borderWidth={1}
                  borderRadius={8}
                  p={4}
                  boxShadow="md"
                >
                  <Text fontWeight="bold">{item.title}</Text>
                  <Text>Price: ${item.price}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                </Box>
              ))}
            </VStack>
          ) : (
            <Text>No items in the cart</Text>
          )}
        </>
      ) : (
        <Text>Please login to view your cart.</Text>
      )}
       {isLoggedIn && <SingleProducts addToCart={addToCart} />}
    </Box>
  );
};

export default Cart;
