import { Box, Center, Flex, Img } from "@chakra-ui/react";
import React from "react";
import Rishav from "../Components/Resources/Rishav.jpg";
const Home = () => {
  return (
    <Box id="Home" h={"550px"} bgGradient='linear(to-r,#185a9d, #43cea2)'>
        {/* <img src="https://readme-typing-svg.demolab.com/?lines=Type+messages+everywhere!;Add+a+bio+to+your+profile!;Add+a+description+to+your+repo!;Make+your+readme+stand+out!&font=Fira%20Code&center=true&width=380&height=50&duration=4000&pause=1000"></img> */}
        <Flex
          paddingTop={"70px"}
          justifyContent={"space-around"}
          h={"full"}
          fontSize={"19px"}
          textAlign="left"
        >
          <Box>
            <Center fontSize={["15px", "15px", "20px", "30px"]} marginTop="5px">
              Hello &nbsp;
              <Img
                src="https://user-images.githubusercontent.com/39955420/147578264-bae0526c-028a-49d2-8af8-d08bb4edbd2a.gif"
                height={["10", "20", "20", "40"]}
                width={["10", "20", "20", "40"]}
              ></Img>
            </Center>
            <Center fontSize={["20px", "20px", "50px", "70px"]}>
              I'm Rishav Neogi
            </Center>
            <Center fontSize={["10px", "10px", "20px", "30px"]}>
              Aspiring Full Stack Web Developer
            </Center>
          </Box>
          <Img
            marginTop={"25px"}
            w={["150px", "150px", "250px", "300px"]}
            borderRadius="10%"
            h={["180px", "180px", "250px", "350px"]}
            src={Rishav}
            alt="port"
          />
        </Flex>
    </Box>
  );
};

export { Home };
