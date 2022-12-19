import { Button, Center, Img, SimpleGrid, Text } from '@chakra-ui/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
const Project = ({ title, bio, image, github, live,type,techStack,area }) => {

    return (
        <SimpleGrid columns={1} id='proj' gap={"10px"} padding={"20px"} w={"90%"}>
                    <Center>
                        <Img margin={"20px"} w={["250px","300px","350px","450px"]} h={["100px","150px","200px","250px"]} src={image} />
                    </Center>
                    <Center>
                        <Text color={"yellow"} mr="6px">{title}Clone</Text>
                    </Center>
                <Center>
                        <Text w={"80%"}>{bio}</Text>
                    </Center>
                    <Center>
                        <Text w={"50%"} mr="6px">My Area of Responsibilities are :</Text> <Text w={"50%"}>{area}</Text>
                    </Center>
                <SimpleGrid columns={[1, 1, 2, 2]} margin={"20px"} gap="10px">
                    <Center>
                        <Text fontSize={"15px"}>Tech Stack :&nbsp;</Text>
                    </Center>
                    <Center fontSize={"15px"}>{techStack}</Center>
                    <Center marginLeft={"5%"} fontSize={"15px"} color="yellow">Project Type :&nbsp;</Center>
                    <Center fontSize={"15px"}>{type}</Center>
                </SimpleGrid>

                <SimpleGrid columns={[1, 1, 2, 2]} gap="10px">
                    <Center>
                        <a style={{ width: "330px" }} href={github} target="_blank" rel='noreferrer'>
                            <Button w={"50%"} color={"white"} backgroundColor={"blue.700"} className='NavBtn' ><GitHubIcon margin={"10px"} />Github</Button></a>
                    </Center>
                    <Center>
                        <a style={{ width: "330px" }} href={live} target="_blank" rel='noreferrer'>
                            <Button w={"50%"} color={"white"} backgroundColor={"blue.700"} className='NavBtn' > <LinkIcon /> Live</Button></a>
                    </Center>
                </SimpleGrid>
        </SimpleGrid>
    )
}
export { Project }