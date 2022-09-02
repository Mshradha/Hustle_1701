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

  const [data , setData ] = useState(["Hello Welcome To Masai"]);
  const [inputData, setInputData]= useState("");

  const getData  = () => {
     axios.get("http://localhost:8080/")
     .then((res)=> setData(res.data))
     .catch((err)=> console.log(err));
  }
 

  // const getAnswers = () => {
  //   const payload = {
      
  //   }
  //   // console.log(payload);
  //   axios.post("http://localhost:8080/post", payload)
  //   .then((res)=> {
  //     console.log(res.data)
  //     setData(res.data)})
  //   .catch((err)=> console.log(err));

  // }

  const getAnswers = () =>{
    if(inputData === "What are the courses?"){
      console.log(data)
     
      setData([...data, "What are the courses?" , "FrontEnd Development, BackeEnd Development, Full-Stack Web Development, Data Analytics"])
      
    }
    else if(inputData === "Fee Structure"){
      console.log(data)
     
      setData([...data, "Fee Structure" , "No Upfront Fees, You have to pay only if you Place above ISA amount"])
      
    }
    else if(inputData === "Tell me something about Masai School?"){
      console.log(data)
     
      setData([...data, "Tell me something about Masai School?" , "Masai is an outcome driven career school. Our mission is to skill India’s untapped & underutilized talent, and to train them for some of the most in-demand jobs in the world. We are introducing a new model of higher education in which we, Masai, invest in our students’ future and success. As India’s fastest growing career institute, Masai has one goal: unlocking the human potential of India by making our education system outcome driven."])
      
    }
    else if(inputData === "What is ISA?"){
      console.log(data)
     
      setData([...data, "What is ISA?" , "Income Share Agreement which you have to sign before joining the Masai"])
      
    }
    else if(inputData === "Curriculam?"){
      console.log(data)
     
      setData([...data, "Curriculam?" , "HTML, CSS, Javascript, React, Redux, Node.js, Express, Mongo"])
      
    }
    else if(inputData === "Did Masai offer Placement?"){
      console.log(data)
     
      setData([...data, "Did Masai offer Placement?" , "You will get interview recomendations after you graduated"])
      
    }
    setInputData("")

  }
  

  

  useEffect(()=>{

   
  },[data])
  

 

    const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Box w={{base:"90%", sm:"90%", md:"70%", lg:"50%"}}   m='auto' >

<Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
       size='md'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Masai School</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' position='absolute' mr='4' bottom='4' w='75%' value={inputData} onChange={(e)=> setInputData(e.target.value)} />
            {data.map((elem, index)=> {
              return (
                <Box key={index} w='100%' fontWeight='600' p='4'  bg='rgb(215,235,242)' mb='4'  style={{borderRadius:" 25px 25px 0px 25px "}} >
                <Text>{elem}</Text> 
                </Box>
              )
            })}
          </DrawerBody>

          <DrawerFooter>
           
            <Button colorScheme='blue' onClick={getAnswers} >Send</Button>
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
