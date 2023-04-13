import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";
import "./stylesProductCard.css"

function ProductCard() {
  return (
    <div className="card-wrapper">
      <Card>
        <CardBody>
         <div className="image-container-card">
         <img className="image-card" src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681406947/snack_vqlhid.webp"/>
         </div>
         <p>idsuhfkudshfhishdhsdh</p>
          <div className="price-wrapper">
          {/* real price */}
          <div>
          <Button variant="outline" color="white" bgColor="yellow.500">$50</Button>
          </div>
          {/* fake price */}
          <div>
           <p>$80</p>
          </div>
         </div>

         <Button color="green">Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductCard;
