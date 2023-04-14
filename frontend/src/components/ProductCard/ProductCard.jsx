import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Text } from "@chakra-ui/react";
import "./stylesProductCard.css"

function ProductCard( {image, name, price, rating }) {
  return (
    <div className="card-wrapper">
      <Card variant = "elevated">
        <CardBody>
         <div className="image-container-card">
          <img className="image-card" src={image}/>
         </div>
         <div>
         <Text fontSize="xl" marginTop="10px"><b>{name}</b></Text>
         
          <span ><Text marginTop="10px" fontWeight="semibold">₹{price}</Text></span>
         <Button marginTop="20px" color="green">Add to Cart</Button>
         </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductCard;
