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

function CartItem() {
  return (
    <Card padding={"10px"}>
      <div className="main">
        <div className="image-cover-div">
          <img
            src="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_be23e5f5-c95e-4fbc-8afc-23ab0cd8881a.png"
            className="image-product"
          />
        </div>
        <div>
          <Text fontSize="sm">Red Seedless Grape</Text>
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
            {" "}
            $200
          </Text>
        </div>
        <div>
          <button className="cancelBtn">
            <CloseIcon />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
