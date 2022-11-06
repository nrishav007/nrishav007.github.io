import React from 'react'
import { Button, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import './Nav.css';
import rishav from "../Resources/rishav-neogi-resume.pdf";
const Desktop = ({home,about,skill,proj,contact}) => {
    const tabs = [
        { name: "Home",ref:{home} },
        { name: "About Me",ref:{home} },
        { name: "Skills",ref:{home} },
        { name: "Projects",ref:{home} },
        { name: "Contact",ref:{home} }];
        console.log(home,tabs)
        const scroll=(ind)=>{
            console.log(ind);
            let op;
            if(ind===0){
                op=home;
            }
            else if(ind===1){
                op=about;
            }
            else if(ind===2){
                op=skill;
            }
            else if(ind===3){
                op=proj;
            }
            else if(ind===4){
                op=contact;
            }
            op.current.scrollIntoView({behavior:"smooth", block: "end"});
        }
    return (
        <Flex zIndex={"999"} backgroundColor={"blue.700"} h="auto" position={"sticky"} top={"0px"} gap={"50px"} >
            <Center color={"white"} w={["300px", "400px", "400px"]} fontWeight={'bold'} fontSize={["15px","15px","10px","20px"]}>Rishav's Portfolio</Center>
            <SimpleGrid columns={[2, 3, 6]} padding={[2,2,2,7]} margin={"auto"} alignItems={"center"} w={"full"} justifyContent={'space-around'} gap={"7px"}>
                {
                    tabs.map(({ name },index) => (
                        <Button onClick={()=>scroll(index)} color={"white"} backgroundColor={"blue.700"} className='NavBtn' >{name}</Button>
                    ))
                }
                <a href={rishav} download={true}><Button color={"white"} backgroundColor={"blue.700"} className='NavBtn'>Resume</Button></a>
            </SimpleGrid>
        </Flex>
    )
}
export { Desktop }