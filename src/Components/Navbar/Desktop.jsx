import React from 'react'
import { Button, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import './Nav.css';
const Desktop = () => {
    const tabs = [
        { name: "Home" },
        { name: "About Me" },
        { name: "Skills" },
        { name: "Projects" },
        { name: "Contact" }];
    return (
        <Flex zIndex={"999"} backgroundColor={"blue.700"} h="auto" position={"sticky"} top={"0px"} gap={"50px"} >
            <Center color={"white"} w={["300px", "400px", "400px"]} fontWeight={'bold'} fontSize="20px">Rishav's Portfolio</Center>
            <SimpleGrid columns={[2, 3, 6]} padding={7} margin={"auto"} alignItems={"center"} w={"full"} justifyContent={'space-around'} gap={"10"}>
                {
                    tabs.map(({ name }) => (
                        <Button color={"white"} backgroundColor={"blue.700"} className='NavBtn' >{name}</Button>
                    ))
                }
                <Button color={"white"} backgroundColor={"blue.700"} className='NavBtn'>Resume</Button>
            </SimpleGrid>
        </Flex>
    )
}
export { Desktop }