import React from 'react'
import NavbarDrawer from '../navbarDrawer/NavbarDrawer'
import { Button, Image, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

import { SearchIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import './stylesNavbar.css'
import LoginModal from '../LoginModal/LoginModal'
import { useNavigate } from 'react-router-dom'
function NavBar({ loggedIn }) {
 
const navigate = useNavigate()
  return (
    <div className='nav-wrapper'>
      <div>
      <Image src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681328390/Group_1_1_zquczc_3_-cropped_ikcsit.svg" height={'80px'} />
      </div>
      <div >
      
      {
        loggedIn ? <InputGroup> <InputLeftElement
        pointerEvents='none'
        children={<SearchIcon color='gray.300' />}

        
      />  
      <Input type='tel' placeholder='Search Items Here ' />
     
       
      </InputGroup>
      : ""
      }
   
   
   
   
     </div>
     {/* <Button colorScheme='green' margin={"8px"} >Get Started</Button>   */}

     { loggedIn ? <div><NavbarDrawer className="drawer-cart" /><Button variant="outline" colorScheme='green' margin={"8px"} onClick={()=> navigate('/')} >Logout</Button>  
   </div> : <LoginModal/>}
    </div>
  )
}

export default NavBar