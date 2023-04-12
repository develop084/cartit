import React from 'react'
import NavbarDrawer from '../navbarDrawer/NavbarDrawer'
import { Button, Image } from '@chakra-ui/react'
import './stylesNavbar.css'
import LoginModal from '../LoginModal/LoginModal'
function NavBar() {
 
   
  return (
    <div className='nav-wrapper'>
      <div>
      <Image src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681328390/Group_1_1_zquczc_3_-cropped_ikcsit.svg" height={'80px'} />
      </div>
      <div>
     <NavbarDrawer />
     {/* <Button colorScheme='green' margin={"8px"} >Get Started</Button>   */}


     <LoginModal/>
     </div>   
    </div>
  )
}

export default NavBar