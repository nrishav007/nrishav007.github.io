import { Box, Button, Center, Img, SimpleGrid, Text } from '@chakra-ui/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
const Project = ({ title, bio, image, github, live }) => {

    return (
        <SimpleGrid columns={[1, 1, 1, 2]} justifyContent="center" alignItems={"center"} margin="auto">
            <Box id='proj' padding={"20px"} borderRadius="10%">
                <Center>{title} Clone</Center>
                <SimpleGrid columns={[1, 1, 1, 1]} gap={"20px"}>
                    <Center>
                        <Img margin={"20px"} w={"300px"} h={"200px"} src={image} />
                    </Center>
                    <Center>
                        <Text>{bio}</Text>
                    </Center>
                </SimpleGrid>
                <SimpleGrid columns={[1, 1, 2, 2]} margin={"20px"} gap="10px">
                    <Center>
                        <Text fontSize={"20px"} color="yellow">Tech Stack :&nbsp;</Text>
                    </Center>
                    <Center fontSize={"25px"}>HTML | CSS | JS</Center>
                    <Center marginLeft={"5%"} fontSize={"20px"} color="yellow">Project Type :&nbsp;</Center>
                    <Center fontSize={"25px"}>Individual</Center>
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 2, 2]} gap="10px">
                    <Center>
                        <a style={{ width: "330px" }} href={github} target="_blank">
                            <Button w={"50%"} color={"white"} backgroundColor={"blue.700"} className='NavBtn' ><GitHubIcon margin={"10px"} />Github</Button></a>
                    </Center>
                    <Center>
                        <a style={{ width: "330px" }} href={live} target="_blank">
                            <Button w={"50%"} color={"white"} backgroundColor={"blue.700"} className='NavBtn' > <LinkIcon /> Live</Button></a>
                    </Center>
                </SimpleGrid>
            </Box>
        </SimpleGrid>
    )
}
export { Project }