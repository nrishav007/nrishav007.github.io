import { Box, Button, Center, Divider, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import '../App.css';
import MailChimp from "./MailChimp.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
const Projects = () => {
  // const project_cat = [
  //   { type: "Mini Projects" },
  //   { type: "Indevidual Projects" },
  //   { type: "Group Projects" }];
  return (
    <Box textColor={"white"} backgroundColor={"blue.700"} h={"auto"} paddingBottom={"30px"}>
      <Divider />
      <Center>
        <Text color={"white"} fontSize={"40px"} fontWeight={"bold"} marginTop={"20px"}>Projects</Text>

      </Center>
      {/* <Flex justifyContent={"space-around"} marginTop={"20px"} marginBottom={"50px"}>
        {
          project_cat.map(({ type }) => (
            <Button color={"white"} backgroundColor={"blue.700"} className='NavBtn' >{type}</Button>
          ))
        }
      </Flex> */}
      <SimpleGrid columns={[1, 2]} margin={"20px"}>
        <Box id='proj' padding={"20px"}borderRadius="10%">
          <Center>Mailchimp Clone</Center>
          <Flex gap={"20px"}>
            <Img margin={"20px"} w={"300px"} h={"200px"} src={MailChimp} />
            <Text>
              Mailchimp is a marketing automation platform and email marketing service. "Mailchimp" is the trading name of its operator, Rocket Science Group, an American company founded in 2001 by Ben Chestnut and Mark Armstrong, with Dan Kurzius joining at a later date.
            </Text>
          </Flex>
          <Flex margin={"20px"}>
            <Center>
            <Text fontSize={"20px"} color="yellow">Tech Stack :&nbsp;</Text></Center>
            <Center fontSize={"25px"}>HTML | CSS | JS</Center>
            <Center marginLeft={"5%"} fontSize={"20px"} color="yellow">Project Type :&nbsp;</Center>
            <Center fontSize={"25px"}>Individual</Center>
          </Flex>
          
          <SimpleGrid columns={[1,1,2,2]} gap="20px">
            <Button w={"50%"} color={"white"} backgroundColor={"blue.700"} className='NavBtn' ><GitHubIcon margin={"10px"}/>Github</Button>
            <Button w={"50%"} color={"white"} backgroundColor={"blue.700"} className='NavBtn' > <LinkIcon /> Live</Button>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export { Projects }