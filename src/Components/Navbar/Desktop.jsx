import React, { useState } from 'react'
import { Button, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import './Nav.css';
import rishav from "../Resources/rishav_neogi_resume.pdf";
import { Link } from 'react-scroll';
const Desktop = () => {
    const tabs = [
        { name: "Home" },
        { name: "About Me" },
        { name: "Skills" },
        { name: "Projects" },
        { name: "Contact" }];
        const [,setVisible] = useState(false)
        const closeMenu = ()=>{
            setVisible(true)
        }
    return (
        <Flex borderBottom={"2px solid cyan"} zIndex={"999"} backgroundColor={"white"} h="auto" position={"sticky"} top={"0px"} gap={"50px"} >
            <Center w={["300px", "400px", "400px"]} color={"black"} fontWeight={'bold'} fontSize={["15px","15px","10px","20px"]}>Rishav's Portfolio</Center>
            <SimpleGrid columns={[1, 3,3, 4, 6]} padding={[2,2,2,7]} margin={"auto"} alignItems={"center"} w={"full"} justifyContent={'space-around'} gap={"7px"}>
                {
                    tabs.map(({ name },index) => (
                        <Link to={name} key={index} spy={true} smooth={true} offset={-100} duration={500} onClick={()=>{closeMenu()}}>
                            <Button minWidth={"107px"} color={"white"} backgroundColor={"blue.700"} className='NavBtn' >{name}</Button>
                        </Link>
                    ))
                }
                <a href={rishav} download={true}><Button minWidth={"107px"} color={"white"} backgroundColor={"blue.700"} className="NavBtn">Resume</Button></a>
            </SimpleGrid>
        </Flex>
    )
}
export { Desktop }