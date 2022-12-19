import { Box, Center, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import '../App.css';
import MailChimp from "./MailChimp.jpeg";
import Dermstore from "./Dermstore.jpeg";
import Getharvest from "./Getharvest.jpeg";
import { Project } from './Project';
const Projects = () => {
  // const project_cat = [
  //   { type: "Mini Projects" },
  //   { type: "Individual Projects" },
  //   { type: "Group Projects" },
  //   { type: "All Projects" }];
  return (
    <Box w={"full"} id="Projects" h={"auto"} paddingBottom={"30px"}>
      <Center>
        <Text fontSize={"40px"} fontWeight={"bold"} marginBottom={"50px"} marginTop={"30px"}>Projects</Text>

      </Center>
      {/* <Flex justifyContent={"space-around"} marginTop={"20px"} marginBottom={"50px"}>
        {
          project_cat.map(({ type },index) => (
            <Button key={index} color={"white"} backgroundColor={"blue.700"} className='NavBtn' >{type}</Button>
          ))
        }
      </Flex> */}
      <SimpleGrid columns={[1, 1, 2, 2]} gap="50px" w={"90%"} margin="auto">

        <Project title="Mailchimp" bio='Mailchimp is a marketing automation platform and email marketing service.' image={MailChimp} github="https://github.com/nrishav007/Mailchimp_Clone" live="https://netlify-thinks-nrishav5-gmail-com-is-great-9b056.netlify.app/" techStack="HTML | CSS | JS" type="Individual" area="I made the Homepage , Loginpage and Signup" />

        <Project title="Dermstore" bio='Dermstore is US web store which sells cosmetics and skin care products.' image={Dermstore} github="https://github.com/nrishav007/Dermstore_Clone" live="https://super-cool-site-by-nrishav5-gmail-com-827ee.netlify.app/" techStack="HTML | CSS | JS" type="Group" area="As I am the team leader I solved other team-mate's problem and I made productpage functionality , cartpage functionality and checkout page" />

        <Project title="Getharvest" bio='Getharvest is a web-based time tracking tool developed and launched by Iridesco LLC in 2006.' image={Getharvest} github="https://github.com/nrishav007/Getharvest_Clone" live="https://getharvest-clone-blond.vercel.app/" techStack="HTML | CSS | JS | React | Chakra UI" type="Individual" area="I made the Homepage , Loginpage and Signup" />

        <Project title="My TV+" bio='My TV+ is inspired project of Apple TV+ is an American subscription streaming service owned and operated by Apple Inc' image="https://user-images.githubusercontent.com/102036593/202791355-4f220ecf-77b6-4a76-a8b2-709e19c2415d.jpg" github="https://github.com/priyanshu1120/bent-tail-4615" live="https://appletv-iakashmondal.vercel.app/" techStack="React | CSS | JS | Redux | Chakra UI | Custom Library" type="Group" area="I made the Custom Slider and Backend Database" />
      </SimpleGrid>
    </Box>
  )
}

export { Projects }