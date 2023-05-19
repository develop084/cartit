import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Heading,
  Flex,
  Box,
  Input,
  Button,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import "./stylesCartItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../reducers/cart";
function CartItem({ id, Productimage, title, price, quantity }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <Card padding="10px" margin="20px">
      <div className="main">
        <div className="image-cover-div">
          <img src={Productimage} className="image-product" />
        </div>
        <div>
          <Text fontSize="sm">{title}</Text>
        </div>
        <div className="countInput">
          <NumberInput>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <div>
          <Text color="green" as="b" fontSize={"bold"}>
            {" Rs. "}
            {price}
          </Text>
        </div>
        <div>
          <button
            className="cancelBtn"
            onClick={() => removeFromCartHandler({ id })}
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
