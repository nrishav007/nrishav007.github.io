import { Box, Center, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
    <Box backgroundColor={"blue.700"} color="white" h={"600px"} id="Skills">
      <Center>
        <Text marginTop={"30px"} fontSize={["20px","20px","20px","35px"]}>Skills that I know</Text>
      </Center>
      <SimpleGrid columns={[1, 2, 3, 4]} marginTop="70px">
        <Center>
          <Img style={{ margin: "10px" }} src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height={["90","90","100","150"]} />
        </Center>
        <Center>
          <Img style={{ margin: "10px" }} src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="React" height={["90","90","100","150"]} />
        </Center>
        <Center>
          <Img style={{ margin: "10px" }} src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="React" height={["90","90","100","150"]} />
        </Center>
        <Center>
          <Img style={{ margin: "10px" }} src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="React" height={["90","90","100","150"]} />
        </Center>
        <Center>
          <Img style={{ margin: "10px" }} src="https://profilinator.rishav.dev/skills-assets/redux-original.svg" alt="React" height={["90","90","100","150"]} />
        </Center>
        <Center>
          <Img style={{ margin: "10px" }} src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="React" height={["90","90","100","150"]} />
        </Center>
        <Center>
          <Img style={{ margin: "10px" }} src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="React" height={["90","90","100","150"]} />
        </Center>
        <Center>
          <Img style={{ margin: "10px" }} src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="React" height={["90","90","100","150"]} />
        </Center>
      </SimpleGrid>
    </Box>
  )
}

export { Skills }