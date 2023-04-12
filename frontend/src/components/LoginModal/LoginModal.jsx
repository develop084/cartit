import React, {useState} from "react";
import axios from 'axios'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input, 
  Switch,
  Text, Image
} from "@chakra-ui/react";
function LoginModal() {
   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <Button colorScheme="green" onClick={onOpen}>Get Started</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Let's Get Started</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input variant='filled' placeholder='Please Enter Your Phone Number'/>

            <Switch colorScheme='green' size='lg' />
            <Text>Recieve OTP through Whatsapp </Text>
            <Image draggable="false" src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681331917/pngwing.com_dy5yfw.png" width={'25px'}/>

            <Button colorScheme="green">Send OTP</Button>
      
          </ModalBody>

         
        </ModalContent>
      </Modal>
    </div>
  );
}

export default LoginModal;

