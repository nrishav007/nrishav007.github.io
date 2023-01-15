import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  Link,
  SimpleGrid,
  Text,
  Button,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { PhoneIcon } from "@chakra-ui/icons";

const Contact = () => {
  const form = useRef();
  const toast = useToast();
  const handleMail = () => {
    console.log(
      !form.current[1].value.includes("@") &&
        !form.current[1].value.includes(".com")
    );
    if (
      form.current[0].value != "" &&
      form.current[1].value != "" &&
      form.current[2].value != ""
    ) {
      if (
        form.current[1].value.includes("@") &&
        form.current[1].value.includes(".com")
      ) {
        emailjs
          .sendForm(
            "service_9obuzkq",
            "template_jien0vl",
            form.current,
            "YbUSAf3SOypm5Jyw3"
          )
          .then(
            (result) => {
              console.log(result.text);
              toast({
                title: `Email sent`,
                status: "success",
                isClosable: true,
              });
              form.current[0].value = "";
              form.current[1].value = "";
              form.current[2].value = "";
            },
            (error) => {
              console.log(error.text);
              toast({
                title: `Email not sent`,
                status: "error",
                isClosable: true,
              });
            }
          );
      } else {
        toast({
          title: `Invalid email address`,
          status: "error",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: `Fill all fields`,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <Box
      id="Contact"
      bgGradient="linear(to-r,#185a9d, #43cea2)"
      paddingBottom={"85px"}
    >
      <Center>
        <Text
          fontSize={"40px"}
          fontWeight={"bold"}
          marginTop={"20px"}
          marginBottom={"100px"}
        >
          Contact Me
        </Text>
      </Center>
      <SimpleGrid columns={[1, 1, 1, 2]} justifyContent={"space-around"}>
        <Flex direction={"column"} gap="20px">
          <Center>
            <Image
              w={"50px"}
              src="https://img.icons8.com/ios-glyphs/344/github.png"
            />
            <Link isExternal={true} color="white" href="https://github.com/nrishav007">
              Rishav Neogi
            </Link>
          </Center>
          <Center>
            <Image
              w={"50px"}
              src="https://img.icons8.com/color/344/linkedin-circled--v1.png"
            />
            <Link isExternal={true} color="white" href="https://linkedin.com/in/rishav-neogi">
            Rishav Neogi
            </Link>
          </Center>
          <Center pl={"30px"}>
            <Box mt={"-20px"} bgColor={"blue.700"} w={"40px"} h={"40px"} borderRadius={"60px"}>
              <Box mt={"7px"}>
            <PhoneIcon />
            </Box>
            </Box>
            <Box pl={"5px"} pb={"20px"}>
              <Link isExternal={true} color="white" href="tel:+919432282245">
                +91 9432282245
              </Link>
            </Box>
          </Center>
        </Flex>
        <Box ml={["0px", "0px", "0px", "-200px"]}>
          <form ref={form}>
            <Center mb="20px">
              <Input
                name="user_name"
                required={true}
                w={"400px"}
                color="black"
                backgroundColor="white"
                placeholder="Enter Your Name"
              ></Input>
            </Center>
            <Center mb="20px">
              <Input
                name="user_email"
                required={true}
                color="black"
                w={"400px"}
                backgroundColor="white"
                placeholder="Enter Your mail ID"
              ></Input>
            </Center>
            <Center>
              <Textarea
                name="message"
                required={true}
                mb="20px"
                w={"400px"}
                color="black"
                backgroundColor="white"
                placeholder="Enter Your feedback/query"
              ></Textarea>
            </Center>
            <Center>
              <Button color={"black"} onClick={handleMail}>
                Submit
              </Button>
            </Center>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export { Contact };
