import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box  id='About Me' h={"400px"} bgGradient='linear(to-r,#185a9d, #43cea2)'>
      <Box paddingTop={"10px"} h={"full"} paddingBottom={"50px"}>
        <Text fontWeight={"bold"} fontSize={["10px","20px","20px","35px"]} marginBottom="50px">About Me</Text>
        <Center>
          <Text w={["95%","95%","50%","60%"]} fontSize={["10px","15px","15px","22px"]} lineHeight={"40px"}>As a dedicated MERN (MongoDB, Express.js, React.js, Node.js) stack developer with one year of professional experience, I have honed my skills in developing robust and scalable web applications. My journey in the MERN stack has equipped me with a comprehensive understanding of both frontend and backend development, allowing me to seamlessly integrate features and functionalities across the stack.</Text>
        </Center>
      </Box>
    </Box>
  )
}

export { About }