import React from 'react'
import { Button, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import './Nav.css'
const Desktop = () => {
    const tabs = [
        {name: "Home", path: "/"},
        {name: "About Me", path: "/about"},
        {name: "Skills", path: "/skills"},
        {name: "Projects", path: "/projects"},
        {name: "Contact", path: "/contact"}];
    return (
        <Flex backgroundColor={"blue.700"} h="auto" position={"sticky"} top="0" gap={"50px"}>
            <Center color={"white"} w={["300px", "400px", "400px"]} fontWeight={'bold'} fontSize="20px">Rishav's Portfolio</Center>
            <SimpleGrid columns={[2, 3, 6]} padding={7} margin={"auto"} alignItems={"center"} w={"full"} justifyContent={'space-around'} gap={"10"}>
                {
                    tabs.map(({name,path}, index) => (
                        <Link to={path} key={index}>
                        <Button color={"white"} backgroundColor={"blue.700"} className='NavBtn' >{name}</Button></Link>
                    ))
                }
                <Button color={"white"} backgroundColor={"blue.700"} className='NavBtn' >Resume</Button>
            </SimpleGrid>

        </Flex>
    )
}

export { Desktop }