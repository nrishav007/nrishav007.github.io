import { Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {  IoMdMenu } from 'react-icons/io';
const Mobile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    const tabs = ["Home", "About Me", "Skills", "Projects", "Contact", "Resume"];
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
                            tabs.map((ele)=>(
                                <Box marginBottom={9} textAlign={"center"}>{ele}</Box>
                            ))
                        }
                        
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Mobile