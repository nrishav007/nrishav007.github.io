import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react';
import {  IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import rishav from "../Resources/rishav-neogi-resume.pdf";
const Mobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    const tabs = [
        {name: "Home"},
        {name: "About Me"},
        {name: "Skills"},
        {name: "Projects"},
        {name: "Contact"}];
        const [,setVisible] = useState(false)
        const closeMenu = ()=>{
            setVisible(true)
        }    
    return (
        <Box zIndex={"999"} position={"sticky"} top={"0px"}>
            <Flex color={"white"} backgroundColor={"blue.700"} h="auto" padding={5} justifyContent={'space-between'}>
                <Center fontWeight={'bold'} fontSize="20px">Rishav's Portfolio</Center>
            <Button ref={btnRef} colorScheme='yellow' onClick={onOpen}>
            <IoMdMenu size="26px" />
            </Button>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody>
                        {
                            tabs.map(({name}, index)=>(
                                <Link to={name} spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{closeMenu()}} key={index}>
                                <Box cursor={"pointer"} key={index} onClick={onClose} marginBottom={9} textAlign={"center"}>{name}</Box></Link>
                            ))
                        }
                        <a href={rishav} download={true}><Box cursor={"pointer"} marginBottom={9} textAlign={"center"} >Resume</Box></a>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Mobile