import React from 'react'
import NavBar from '../components/navbar/NavBar'
import SkeletonItem from '../components/SkeletonItem'
import './stylesHome.css'
import ProductCard from '../components/ProductCard/ProductCard'

const arrayItems = [1,2,3,4,5,6,7,8]
function Home() {
  
  return (
    <div>
      <NavBar loggedIn/>

      <div className='skel-wrap' >
      {arrayItems.map(item =>  <ProductCard/>)}
      </div>
     
    </div>
  )
}

export default Home