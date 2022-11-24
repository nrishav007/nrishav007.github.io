import { Box, Center, Flex, Image, Input, Link, SimpleGrid, Text, Button, Textarea} from '@chakra-ui/react'
import React, { useRef } from 'react'
// import { SMTPClient } from 'emailjs';

const Contact = () => {
  let email=useRef();
  let body=useRef();
  const handleMail=()=>{

  }
  return (
    <Box id='Contact' backgroundColor={"blue.700"} >
      <Center>
        <Text color={"white"} fontSize={"40px"} fontWeight={"bold"} marginTop={"20px"} marginBottom={"100px"}>Contact Me</Text>
      </Center>
        <SimpleGrid columns={[1,1,1,2]} justifyContent={"space-around"}>
          <Flex direction={"column"} gap="20px">
            <Center>
              <Image w={"50px"} src="https://img.icons8.com/ios-glyphs/344/github.png" />
              <Link color='white' href='https://github.com/nrishav007'>nrishav007</Link>
            </Center>
            <Center>
              <Image w={"50px"} src="https://img.icons8.com/color/344/linkedin-circled--v1.png" />
              <Link color='white' href='https://linkedin.com/in/rishav-neogi'>rishav-neogi</Link>
            </Center>
          </Flex>
          <Box ml={["0px","0px","0px","-200px"]} >
            <Center mb="20px">
            <Input ref={email} required={true} w={"400px"} backgroundColor="white" placeholder='Enter Your mail ID' ></Input></Center>
            <Center>
            <Textarea ref={body} required={true} mb="20px" w={"400px"} backgroundColor="white" placeholder='Enter Your feedback/query' ></Textarea></Center>
            <Center>
            <Button onClick={handleMail}>Submit</Button> </Center>
          </Box>
        </SimpleGrid>
    </Box>
  )
}

export { Contact }