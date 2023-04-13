import React, { useState } from "react";
import axios from "axios";
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
  Text,
  Image,
} from "@chakra-ui/react";
import "./stylesLoginModal.css";
import { useToast } from "@chakra-ui/react";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [number, setNumber] = useState("");
  const [isSwitch, setIsSwitch] = useState(false);
  const [changeAuth, setChangeAuth] = useState("Login");
  const  [otp, setOtp] = useState("");
  const [phoneId, setPhoneId] = useState("");
  const toast = useToast();

  const sendOtp = async () => {
    if (number) {
      axios
        .post("http://localhost:8000/api/v1/sendOtp", {
          phone_number: number,
        })
        .then((res) => {
          if (res.status === 200) {
            setPhoneId(res.data.data.phone_id)
            toast({
              title: `Otp Send To Your Phone Number`,
              position: "top",
              isClosable: true,
              status: "success",
            });
            setChangeAuth("Verify");
          }
        })
        .catch((e) => {
          if (e.code === "ERR_BAD_REQUEST") {
            toast({
              title: `Please Enter the valid Phone Number`,
              position: "top",
              isClosable: true,
              status: "warning",
            });
          }
        });
    } else {
      alert("Please Enter Your Phone Number");
    }
  };

  const sendOtpWhatsapp = async () => {
    if (number) {
      axios
        .post("http://localhost:8000/api/v1/sendOtpWhatsapp", {
          phone_number: number,
        })
        .then((res) => {
         setPhoneId(res.data.data.phone_id)
          if (res.status === 200) {
            toast({
              title: `Otp Send To Whatsapp`,
              position: "top",
              isClosable: true,
              status: "success",
            });
            setChangeAuth("Verify");
          }
        })
        .catch((e) => {
          if (e.code === "ERR_BAD_REQUEST") {
            toast({
              title: `Please Enter the valid Phone Number`,
              position: "top",
              isClosable: true,
              status: "warning",
            });
          }
        });
    } else {
      toast({
         title: `Please Enter the valid Phone Number`,
         position: "top",
         isClosable: true,
         status: "warning",
       });
    }
  };

  const verifyOtp = async () => {
    

    axios.post('http://localhost:8000/api/v1/authenticateotp',{
      code: otp, 
      phoneId: phoneId
    }).then(res => console.log(res))
  }

  return (
    <div className="wrapper-main-model">
      <Button colorScheme="green" onClick={onOpen}>
        Get Started
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />

        {changeAuth === "Verify" ?  (
          <ModalContent>
            <ModalHeader>Verify</ModalHeader>
            <ModalCloseButton />
            <div className="modal-body">
              <div className="image-wrapper">
                <Image src="" width={"100%"} />
              </div>
              <div>
                <ModalBody>
                  <HStack>
                    <PinInput onChange={(e)=> setOtp(e)} otp>
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                      <PinInputField />
                    </PinInput>
                  </HStack>
                  <div className="wrapper-btn">
                  <Button onClick={verifyOtp}>Submit</Button>
                  </div>
                </ModalBody>
              </div>
            </div>
          </ModalContent>
        ) : (
          <ModalContent>
            <ModalHeader>Let's Get Started</ModalHeader>
            <ModalCloseButton />
            <div className="modal-body">
              <div className="image-wrapper">
                <Image
                  src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681361492/6300_b_3_09-PhotoRoom.png-PhotoRoom_i4dzd5.png"
                  width={"100%"}
                />
              </div>
              <div>
                <ModalBody>
                  <Input
                    onChange={(e) => setNumber(e.target.value)}
                    variant="filled"
                    placeholder="Please Enter Your Phone Number"
                    defaultValue={'+91'}
                  />
                  <div className="wrapper-btn">
                    <Switch
                      onChange={(e) =>
                        isSwitch ? setIsSwitch(false) : setIsSwitch(true)
                      }
                      colorScheme="green"
                      size="lg"
                    />
                    <Text>Recieve OTP through Whatsapp </Text>
                    <div>
                      <Image
                        draggable="false"
                        src="https://res.cloudinary.com/dts8hnbex/image/upload/v1681331917/pngwing.com_dy5yfw.png"
                        width={"25px"}
                      />
                    </div>
                    <Button
                      onClick={isSwitch ? sendOtpWhatsapp : sendOtp}
                      colorScheme="green"
                    >
                      Send OTP
                    </Button>
                  </div>
                </ModalBody>
              </div>
            </div>
          </ModalContent>
        )}
      </Modal>
    </div>
  );
}

export default LoginModal;
