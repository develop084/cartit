import React ,{useState, useEffect} from 'react'
import NavBar from '../components/navbar/NavBar'
import SkeletonItem from '../components/SkeletonItem'
import './stylesHome.css'
import ProductCard from '../components/ProductCard/ProductCard'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart,removeFromCart  } from '../reducers/cart'
import { Link } from 'react-router-dom'
function Home() {

  const [isLoading ,setIsLoading] = useState(true)
  const [productList , setProductList] = useState([])
  useEffect( () => {
      axios.get('http://localhost:8000/api/v1/all')
      .then( res => {
        setProductList(res.data)
        setTimeout(()=>{
          setIsLoading(false)
        }, 1500)
       
      })
      .catch (err => console.log(err))
  
  }, [])

  console.log(productList)


  

  return (
    <div>
      <NavBar loggedIn/>
     <button></button>
      <div className='skel-wrap' >
        {isLoading ? productList.map(item => <SkeletonItem />) : productList.map(item => <ProductCard id={item._id}image={item.image.url} name={item.name} price={item.price} rating={item.rating}/>)}
      
      </div>
     
    </div>
  )
}

export default Home