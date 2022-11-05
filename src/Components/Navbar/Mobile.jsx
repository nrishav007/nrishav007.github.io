import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import {  IoMdMenu } from 'react-icons/io';
const Mobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    const tabs = [
        {name: "Home"},
        {name: "About Me"},
        {name: "Skills"},
        {name: "Projects"},
        {name: "Contact"}];
    return (
        <Box>
            <Flex color={"white"} backgroundColor={"blue.700"} h="auto" position={"sticky"} top="0" padding={5} justifyContent={'space-between'}>
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
                    <DrawerHeader>Have a look...</DrawerHeader>

                    <DrawerBody>
                        {
                            tabs.map(({name}, index)=>(
                                <Box key={index} onClick={onClose} marginBottom={9} textAlign={"center"}>{name}</Box>
                            ))
                        }
                        
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Mobile