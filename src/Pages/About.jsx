import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box  id='About Me' h={"400px"} bgGradient='linear(to-r,#185a9d, #43cea2)'>
      <Box paddingTop={"10px"} h={"full"} paddingBottom={"50px"}>
        <Text fontWeight={"bold"} fontSize={["10px","20px","20px","35px"]} marginBottom="50px">About Me</Text>
        <Center>
          <Text w={["95%","95%","50%","60%"]} fontSize={["10px","15px","15px","22px"]} lineHeight={"40px"}>Web developer with a strong focus on React. Proficient in HTML, CSS, JavaScript, MongoDB, Express, and node. Skilled in creating responsive, user-friendly websites with a strong emphasis on design. Proven ability to adapt to new technologies and collaborate effectively in a team environment.</Text>
        </Center>
      </Box>
    </Box>
  )
}

export { About }