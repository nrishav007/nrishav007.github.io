import { Box, Center, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
const Git = () => {
    return (
        <Box backgroundColor={"blue.700"} color="white" paddingBottom={"20px"}>
            <Center>
                <Text color={"white"} fontSize={"40px"} fontWeight={"bold"} marginTop={"20px"} marginBottom={"70px"}>GitHub Stat and Calender</Text>
            </Center>
            <Center>
                <GitHubCalendar username="nrishav007" />
            </Center>
            <SimpleGrid w={"90%"} margin="auto" alignItems="center" columns={[1,1,2,2]} gap="10px" marginTop={"20px"}>
            <Center>
                <Image src='https://github-readme-stats.vercel.app/api?username=nrishav007&count_private=true&show_icons=true&theme=radical'/>
            </Center>
            <Center>
                <Image src='https://github-readme-streak-stats.herokuapp.com/?user=nrishav007'/>
            </Center>
            </SimpleGrid>
        </Box>
    )
}

export default Git