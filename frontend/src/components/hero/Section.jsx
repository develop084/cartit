import { Card, Text } from '@chakra-ui/react'
import React from 'react'
import "./stylesSection.css"
import CardSwiper from '../cardSwiper/CardSwiper'

function Section() {
  return (
    <div className='section-wrapper'>
    <Text color="green" fontWeight={'600'} fontSize={'4xl'}>100+ Local Stores our Partners</Text>
     <Text color="orange.500" fontSize={'2xl'}>with over <b color='orange'>1000+</b> Brands <img src="https://em-content.zobj.net/thumbs/120/apple/354/red-heart_2764-fe0f.png" width="20px"/></Text>

     <CardSwiper/>
    </div>
  )
}

export default Section