import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import '../App.css';
import MailChimp from "./MailChimp.jpeg";
import { Project } from './Project';
const Projects = () => {
  // const project_cat = [
  //   { type: "Mini Projects" },
  //   { type: "Indevidual Projects" },
  //   { type: "Group Projects" }];
  return (
    <Box w={"full"} id="Projects" textColor={"white"} backgroundColor={"blue.700"} h={"auto"} paddingBottom={"30px"}>
      <Center>
        <Text color={"white"} fontSize={"40px"} fontWeight={"bold"} marginTop={"20px"} marginBottom={"100px"}>Projects</Text>

      </Center>
      {/* <Flex justifyContent={"space-around"} marginTop={"20px"} marginBottom={"50px"}>
        {
          project_cat.map(({ type }) => (
            <Button color={"white"} backgroundColor={"blue.700"} className='NavBtn' >{type}</Button>
          ))
        }
      </Flex> */}
      <SimpleGrid columns={[1,1,2,2]} gap="50px" w={"90%"} margin="auto">

        <Project title="Mailchimp" bio='Mailchimp is a marketing automation platform and email marketing service. "Mailchimp" is the trading name of its operator, Rocket Science Group, an American company founded in 2001 by Ben Chestnut and Mark Armstrong, with Dan Kurzius joining at a later date.' image={MailChimp} github="https://github.com/nrishav007/Mailchimp_Clone" live="https://netlify-thinks-nrishav5-gmail-com-is-great-9b056.netlify.app/" />

        <Project title="Mailchimp" bio='Mailchimp is a marketing automation platform and email marketing service. "Mailchimp" is the trading name of its operator, Rocket Science Group, an American company founded in 2001 by Ben Chestnut and Mark Armstrong, with Dan Kurzius joining at a later date.' image={MailChimp} github="https://github.com/nrishav007/Mailchimp_Clone" live="https://netlify-thinks-nrishav5-gmail-com-is-great-9b056.netlify.app/" />


      </SimpleGrid>
    </Box>
  )
}

export { Projects }