import { Box, Center, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
const Skills = () => {
  const skills = [
    {
      src: "https://i.ibb.co/p2LXrKC/css.png",
      alt: "CSS"
    },
    {
      src: "https://i.ibb.co/0KnRJw9/html.png",
      alt: "HTML"
    },
    {
      src: "https://i.ibb.co/MN0gy87/javascript.png",
      alt: "JavaScript"
    },
    {
      src: "https://i.ibb.co/42JhCD6/react.png",
      alt: "React"
    },
    {
      src: "https://profilinator.rishav.dev/skills-assets/redux-original.svg",
      alt: "Redux"
    },
    
    {
      src: "https://i.ibb.co/LxLnj6F/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915d780ea2-2723311115227006.png",
      alt: "MongoDb"
    },
    {
      src: "https://i.ibb.co/ssDZz78/express.png",
      alt: "Express"
    },
    
    {
      src: "https://i.ibb.co/p1r0rkT/node.png",
      alt: "Node JS"
    },
    {
      src: "https://i.ibb.co/55wNDw0/github.png",
      alt: "Github"
    }
  ];
  return (
    <Box h={"full"} id="Skills">
      <Center>
        <Text marginTop={"30px"} fontSize={["20px", "20px", "20px", "35px"]}>
          Skills that I know
        </Text>
      </Center>
      <SimpleGrid columns={[2, 2, 3, 4]} marginTop="70px">
        {skills.map((ele) => {
          return (
            <Flex direction={"column"} mb={"10px"}>
              <Center>
                <Img
                  style={{ margin: "10px" }}
                  src={ele.src}
                  alt={ele.alt}
                  height={["90", "90", "100", "100px"]}
                  width={["90", "90", "100", "100px"]}
                />
              </Center>
              <Center>
                <Text fontSize={"25px"}>{ele.alt}</Text>
              </Center>
            </Flex>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export { Skills };
