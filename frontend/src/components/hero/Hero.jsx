import React from 'react'
import { Image, Text } from '@chakra-ui/react'
import "./stylesHero.css"
function Hero() {
  return (
    <div className="hero-wrapper-main">
    <div>
     <Image src='https://res.cloudinary.com/dts8hnbex/image/upload/v1681327138/cartit_bunny.svg' alt='Bunny' height={'100%'} />
    </div>
    <div>
      <Text as='b' color='purple' className='text-main' fontSize={'4xl'}>
      Get Your All Groceries <br/>
       Delivered under  <u>30 mins</u>
      <div className='imagesClub'>
       <Image src="https://em-content.zobj.net/thumbs/120/apple/354/leafy-green_1f96c.png" height={'40px'} />
       <Image src="https://em-content.zobj.net/thumbs/120/apple/354/soft-ice-cream_1f366.png" height={'40px'} />
       <Image src="https://em-content.zobj.net/thumbs/120/apple/354/pretzel_1f968.png" height={'40px'} />
       </div> 
      </Text>
    </div>
    </div>
  )
}

export default Hero