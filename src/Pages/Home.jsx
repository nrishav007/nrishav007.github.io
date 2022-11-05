import { Box, Center, Divider, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import Rishav from "../Components/Resources/Rishav.jpg"
const Home = () => {
  return (
    <Box>
    <Flex justifyContent={"space-around"} textColor={"white"} h={"full"} backgroundColor={"blue.700"} fontSize={"19px"} textAlign="left">
      <Box>
      <Center fontSize={"30px"} marginTop="5px">Hello  &nbsp;<Img src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif" height="40" width="40"></Img></Center>
      <Center fontSize={"70px"} color={"white"}>I'm Rishav Neogi</Center>
      <Center fontSize={"30px"}>Aspiring Full Stack Web Developer</Center>
      </Box>
      <Img marginBottom={"30px"} marginTop={"25px"} w={"300px"} borderRadius="10%" h={"330px"} src={Rishav} alt='port' />
    </Flex>
    <Divider />
    </Box>
  )
}

export {Home}