import React from 'react'
import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
   Button,
   Input,
   useDisclosure
 } from '@chakra-ui/react'
import CartItem from '../cart/cartItem/CartItem'
import './stylesNavbarDrawer.css'
function NavbarDrawer() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()
 
  return (
   <>
   <Button ref={btnRef} colorScheme='green' variant="outline" onClick={onOpen}>
        Cart
      </Button>
      <Drawer
      size="md"
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
           <CartItem/>
          </DrawerBody>

          <DrawerFooter>
            <div>
            
            <Button margin={'20px'}>$ total</Button>
           
            
            <Button colorScheme='green'>Checkout</Button>
           
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   </>
  )
}

export default NavbarDrawer