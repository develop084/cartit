import React, {useState, useEffect} from "react";
import NavBar from "../components/navbar/NavBar";
import { Image, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./stylesSingleProduct.css";
import SinglePageReal from "./SinglePageReal";

function SingleProduct() {
  const [ isLoading, setIsLoading] = useState(true)
  const [data , setData] = useState(null)
  const {id} = useParams();

  console.log(id)
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`http://localhost:8000/api/v1/product/${id}`)
      setData(res.data)
      console.log(res.data)
      setIsLoading(false)
    }
    getData()
  }, [])
    



  return (
    <div>
      
       <NavBar loggedIn />
       <SinglePageReal data ={data}/>
    {
      isLoading ? (

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
       
      ) : (<div>
       <p>{data.name}</p>
       <Image src={data.image.url} />
      </div>)
    }
     
     
    </div>
  );
}

export default SingleProduct;
