import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <Box id='Contact' backgroundColor={"blue.700"}>
      <Center>
        <Text color={"white"} fontSize={"40px"} fontWeight={"bold"} marginTop={"20px"} marginBottom={"100px"}>Contact Me</Text>
        
      </Center>
    </Box>
  )
}

export {Contact}