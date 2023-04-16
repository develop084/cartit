import React from "react";
import NavBar from "../components/navbar/NavBar";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import "./stylesSingleProduct.css";
function SingleProduct() {
  return (
    <div>
      <NavBar loggedIn />
      <div className="main-wrapper">
      <div>
        <Skeleton borderRadius="5px" height="30rem" width="500px" />
      </div>
      <div>
        <Skeleton
          borderRadius="5px"
          height="40px"
          width="500px"
          marginTop="2"
        />
        <Skeleton
          borderRadius="5px"
          height="40px"
          width="250px"
          marginTop="2"
        />
        <Skeleton
          borderRadius="5px"
          height="80px"
          width="500px"
          marginTop="2"
        />

        <div className="btn-wrapper">
          <Skeleton
            borderRadius="5px"
            height="60px"
            width="200px"
            marginTop="2"
          />
          <Skeleton
            borderRadius="5px"
            height="60px"
            width="200px"
            marginTop="2"
          />
        </div>
      </div>
      </div>
    </div>
  );
}

export default SingleProduct;
