import { Box, Center, Flex, Image, Input, Link, SimpleGrid, Text, Button, Textarea, useToast } from '@chakra-ui/react'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { PhoneIcon } from '@chakra-ui/icons';

const Contact = () => {
  const form = useRef();
  const toast = useToast();
  const handleMail = () => {
    emailjs.sendForm('service_9obuzkq', 'template_jien0vl', form.current, 'YbUSAf3SOypm5Jyw3')
      .then((result) => {
        console.log(result.text);
        toast({
          title: `Email sent`,
          status: 'success',
          isClosable: true,
        })
      }, (error) => {
        console.log(error.text);
        toast({
          title: `Email not sent`,
          status: 'error',
          isClosable: true,
        })
      });
  }
  return (
    <Box id='Contact' backgroundColor={"blue.700"} >
      <Center>
        <Text color={"white"} fontSize={"40px"} fontWeight={"bold"} marginTop={"20px"} marginBottom={"100px"}>Contact Me</Text>
      </Center>
      <SimpleGrid columns={[1, 1, 1, 2]} justifyContent={"space-around"}>
        <Flex direction={"column"} gap="20px">
          <Center>
            <Image w={"50px"} src="https://img.icons8.com/ios-glyphs/344/github.png" />
            <Link color='white' href='https://github.com/nrishav007'>nrishav007</Link>
          </Center>
          <Center>
            <Image w={"50px"} src="https://img.icons8.com/color/344/linkedin-circled--v1.png" />
            <Link color='white' href='https://linkedin.com/in/rishav-neogi'>rishav-neogi</Link>
          </Center>
          <Center pl={"30px"}>
          <PhoneIcon />
          <Box pl={"10px"}>
            <Link color='white' href=''>+91 9432282245</Link>
            </Box>
          </Center>
        </Flex>
        <Box ml={["0px", "0px", "0px", "-200px"]} >
          <form ref={form}>
          <Center mb="20px">
              <Input name="user_name" required={true} w={"400px"} backgroundColor="white" placeholder='Enter Your Name' ></Input></Center>
            <Center mb="20px">
              <Input name="user_email" required={true} w={"400px"} backgroundColor="white" placeholder='Enter Your mail ID' ></Input></Center>
            <Center>
              <Textarea name="message" required={true} mb="20px" w={"400px"} backgroundColor="white" placeholder='Enter Your feedback/query' ></Textarea></Center>
            <Center>
              <Button onClick={handleMail}>Submit</Button>
            </Center>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export { Contact }