import { Box, Center, Divider, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box>
      <Box backgroundColor={"blue.700"} color="white" h={"400px"}>
        <Text fontSize={"35px"} marginBottom="50px">About Me</Text>
        <Center>
          <Text w={"60%"}>A passionate Full Stack Web Developer, Dedicated to developing robust applications that interact with the Frontend part of web applications. Extensive expertise in website architecture, design, and web design, and web API designs. Problem-solving mindset with a goal to optimize my application for better stability and speed. Love to work in a team.</Text>
        </Center>
      </Box>
      <Divider />
    </Box>
  )
}

export { About }