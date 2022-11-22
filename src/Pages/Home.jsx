import { Box, Center, Flex, Img } from '@chakra-ui/react'
import React from 'react'
import Rishav from "../Components/Resources/Rishav.jpg"
const Home = () => {
  return (
    <Box id="Home" h={"600px"}>
    <Flex paddingTop={"70px"} justifyContent={"space-around"} textColor={"white"} h={"full"} backgroundColor={"blue.700"} fontSize={"19px"} textAlign="left">
      <Box>
      <Center fontSize={["15px","15px","20px","30px"]} marginTop="5px">Hello  &nbsp;<Img src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif" height={["10","20","20","40"]} width={["10","20","20","40"]}></Img></Center>
      <Center fontSize={["20px","20px","50px","70px"]} color={"white"}>I'm Rishav Neogi</Center>
      <Center fontSize={["10px","10px","20px","30px"]}>Aspiring Full Stack Web Developer</Center>
      </Box>
      <Img marginTop={"25px"} w={["150px","150px","250px","300px"]} borderRadius="10%" h={["180px","180px","250px","350px"]} src={Rishav} alt='port' />
    </Flex>
    </Box>
  )
}

export {Home}