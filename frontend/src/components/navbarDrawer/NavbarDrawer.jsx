import React, {useState} from 'react'
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
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';

function NavbarDrawer() {
   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()
   const dispatch = useDispatch();
   const [cartIsEmpty, setCartIsEmpty] = useState(true);

   const cart = useSelector(state => state.cart); 
  
   const calculateTotal = cart.reduce((acc, item) => acc + item.price, 0)
   
  return (
   <>
   <Button variant="outline" color="green.700" onClick={onOpen}>
   <AiOutlineShoppingCart fontSize="30px"  color="green" ref={btnRef} >
      
      </AiOutlineShoppingCart>
      {cart.length}
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

            {
              cart.length === 0 ? <div className="empty-cart">Your cart is empty</div> :
              cart.map(item => <CartItem id={item.id} key={item.key} Productimage={item.image} title={item.name} price={item.price}/>)
            }
           {/* <CartItem Productimage={} title={} price={}/> */}
          </DrawerBody>

          <DrawerFooter>
            <div>
            

            <Button disabled={ cart.length === 0 ? true: false} margin={'20px'}
            colorScheme={ cart.length === 0 ? "grey" : "green" }
            
            >Total : ₹ {calculateTotal}</Button>
           
            
            <Button disabled={ cart.length === 0 ? true: false} colorScheme={ cart.length === 0 ? "grey" : "green" }>Checkout</Button>
            
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
   </>
  )
}

export default NavbarDrawer