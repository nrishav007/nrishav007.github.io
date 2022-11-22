import { Box, Center, Img, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';

const Git = () => {
    return (
        <Box backgroundColor={"blue.700"} color="white">
            <Center>
                <Text color={"white"} fontSize={"40px"} fontWeight={"bold"} marginTop={"20px"} marginBottom={"100px"}>Days I Code</Text>
            </Center>
            <Center>
                <GitHubCalendar username="nrishav007" />
            </Center>
        </Box>
    )
}

export default Git