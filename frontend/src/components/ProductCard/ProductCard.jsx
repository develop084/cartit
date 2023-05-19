import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import "./stylesProductCard.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../reducers/cart";
import { Link } from "react-router-dom";

function ProductCard({ image, name, price, rating, id }) {
  const dispatch = useDispatch();
  const [itemSelected, setItemSelected] = useState(false);

  const addToCartHandler = () => {
    dispatch(addToCart({ id, image, name, price, rating }));
    setItemSelected(true);
  };

  const removeCartHandler = () => {
    dispatch(removeFromCart({ id }));
    setItemSelected(false);
  };

  return (
    <div className="card-wrapper">
      <Card variant="elevated">
        <CardBody>
          <Link to={`/product/${id}`}>
            <div className="image-container-card">
              <img className="image-card" src={image} />
            </div>
          </Link>
          <div>
            <Text fontSize="xl" marginTop="10px">
              <b>{name}</b>
            </Text>

            <span>
              <Text marginTop="10px" fontWeight="semibold">
                ₹{price}
              </Text>
            </span>

            <Button
              marginTop="20px"
              colorScheme="green"
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProductCard;
