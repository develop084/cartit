import React from 'react'
import "./swiperHero.css"
import CardSwiper from '../cardSwiper/CardSwiper'
import { Text } from '@chakra-ui/react'
function SwiperHero() {
  return (
    <div className='wrapper-main'>
    <div>
      <CardSwiper />
    </div>
    <div>
      <Text color="white" className="text-head"fontSize={"4xl"} fontWeight={'700'}>Fullfiling Your All Daily Supplies<span><img src="https://em-content.zobj.net/thumbs/120/apple/354/shopping-cart_1f6d2.png" width="60px"/> with No Extra  <b>Time</b>  <img src="https://em-content.zobj.net/thumbs/120/apple/354/watch_231a.png"/>  </span>
     
      </Text>
    </div>
    </div>
  )
}

export default SwiperHero