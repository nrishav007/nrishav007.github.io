import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const About = ({AboutRef}) => {
  return (
    <Box ref={AboutRef} h={"600px"}>
      <Box backgroundColor={"blue.700"} color="white"  h={"full"} paddingBottom={"90px"}>
        <Text fontSize={["10px","20px","20px","35px"]} marginBottom="50px">About Me</Text>
        <Center>
          <Text w={["95%","95%","50%","60%"]} fontSize={["10px","15px","15px","25px"]} lineHeight={"50px"}>A passionate Full Stack Web Developer, Dedicated to developing robust applications that interact with the Frontend part of web applications. Extensive expertise in website architecture, design, and web design, and web API designs. Problem-solving mindset with a goal to optimize my application for better stability and speed. Love to work in a team.</Text>
        </Center>
      </Box>
    </Box>
  )
}

export { About }