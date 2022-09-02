import { Box, Button, Text,  Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Input, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';

const Info = () => {

  const [data , setData ] = useState([]);
  const [inputData, setInputData]= useState("");

  // const getData  = () => {
  //    axios.get("http://localhost:8080/")
  //    .then((res)=> setData(res))
  //    .catch((err)=> console.log(err));
  // }

  const getData = async(payoad)=> {
    const payload = "Tell me something about Masai School?";
    const reqData = await fetch("http://localhost:8080", {
      method:"GET",
      headers:{"content-type":"application/json", "About":payload}
    })
    .then((res)=> res.json())
    .then((res)=> {
      setData(res.data);
      console.log(res)
    })
    .catch((err)=> console.log(err));
  }

  

  useEffect(()=>{
    getData();
    console.log(data);
  },[])
  

 

    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Box w={{base:"90%", sm:"90%", md:"70%", lg:"50%"}}   m='auto' >

<Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' >Send</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        <Text fontWeight='600' fontSize={{base:'25px', md:'40px' , lg:'50px'}} color='gray.600'  >Know More About Masai Here!</Text>
         <Text fontWeight='800' fontSize={{base:'25px', md:'40px' , lg:'45px'}}  mt='4'    >Driven by Outcomes,<br/> Fuelled by Ambitions.</Text> 
            <Button onClick={onOpen} bg='rgb(237,3,49)' color='white' mt='8' p='6'>To Know More, Click Here</Button>
    </Box>
  )
}

export default Info
