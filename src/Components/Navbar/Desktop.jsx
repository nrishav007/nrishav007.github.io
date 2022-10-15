import React from 'react'
import { Button, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import './Nav.css'
const Desktop = () => {
    const tabs = ["Home", "About Me", "Skills", "Projects", "Contact", "Resume"];
    return (
        <Flex backgroundColor={"blue.700"} h="auto" position={"sticky"} top="0" gap={"50px"}>
            <Center color={"white"} w={["300px","400px","400px"]} fontWeight={'bold'} fontSize="20px">Rishav's Portfolio</Center>
            <SimpleGrid columns={[2,3,6]} padding={3} margin={"auto"} alignItems={"center"} w={"full"} justifyContent={'space-around'} gap={"10"}>
                {
                    tabs.map((ele, index) => (
                        <Button className='NavBtn' key={index}>{ele}</Button>
                    ))
                }
            </SimpleGrid>
            
        </Flex>
    )
}

export { Desktop }