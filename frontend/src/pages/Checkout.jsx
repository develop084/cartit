import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

function AddressPage({ onNext }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function handleNext() {
    onNext({ name, address });
  }

  return (
    <Stack spacing="6">
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl id="address">
        <FormLabel>Address</FormLabel>
        <Input value={address} onChange={(e) => setAddress(e.target.value)} />
      </FormControl>
      <Button onClick={handleNext}>Next</Button>
    </Stack>
  );
}

function OrderSummaryPage({ items, onPrev, onNext }) {
  function handlePrev() {
    onPrev();
  }

  function handleNext() {
    onNext();
  }

  return (
    <Stack spacing="6">
      <Box>
        {items.map((item) => (
          <Box
            key={item.id}
            d="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{item.name}</Text>
            <Text>${item.price.toFixed(2)}</Text>
          </Box>
        ))}
      </Box>
      <Box d="flex" alignItems="center" justifyContent="space-between">
        <Text>Total</Text>
        <Text>
          ${items.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
        </Text>
      </Box>
      <SimpleGrid columns={2} spacing="3">
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </SimpleGrid>
    </Stack>
  );
}

function PaymentPage({ onPrev }) {
  function handlePrev() {
    onPrev();
  }

  return (
    <Stack spacing="6">
      <FormControl id="cardNumber">
        <FormLabel>Card Number</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="expirationDate">
        <FormLabel>Expiration Date</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="cvv">
        <FormLabel>CVV</FormLabel>
        <Input />
      </FormControl>
      <SimpleGrid columns={2} spacing="3">
        <Button onClick={handlePrev}>Previous</Button>
        <Button colorScheme="green">Place Order</Button>
      </SimpleGrid>
    </Stack>
  );
}

function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState(null);
  const [items] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  function handleNextAddressPage(data) {
    setAddress(data);
    setStep(2);
  }

  function handlePrevOrderSummaryPage() {
    setStep(1);
  }

  function handleNextOrderSummaryPage() {
    setStep(3);
  }

  function handlePrevPaymentPage() {
    setStep(2);
  }

  return (
    <Box maxW="md" mx="auto" mt="12">
      {step === 1 && <AddressPage onNext={handleNextAddressPage} />}
      {step === 2 && (
        <OrderSummaryPage
          items={items}
          onPrev={handlePrevOrderSummaryPage}
          onNext={handleNextOrderSummaryPage}
        />
      )}
      {step === 3 && <PaymentPage onPrev={handlePrevPaymentPage} />}
    </Box>
  );
}

export default CheckoutPage;
