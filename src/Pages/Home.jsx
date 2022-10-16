import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <Flex h={"full"} backgroundColor={"orange.400"} fontSize={"19px"} textAlign="left">
      <Box paddingLeft="200px">
      <Text marginTop="5px" fontSize={"46px"}>Hello 👋.</Text>
      I am Rishav Neogi
      </Box>
      <img   src='' alt='port'></img>
    </Flex>
  )
}

export {Home}