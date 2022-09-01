import { Box, Button, Text,  Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Input, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

const Info = () => {
  const [data,setData] = useState("")
  const handleSend = ()=> {
    console.log("e")
  }
  const handlechnage=(e)=>{
    // setData(e)
    console.log(e)

  }

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
            <Input placeholder='Type here...' value={(e)=> {
              setData(e.target.value)
              console.log(setData)
            }} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={()=>{handleSend()}}>Send</Button>
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
