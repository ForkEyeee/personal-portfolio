import {
  Box,
  Flex,
  Text,
  VStack,
  Image,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

function ContactMe() {
  return (
    <Box bg="gray.600" color="white" p="4">
      <Flex
        justify="space-evenly"
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
      >
        <VStack
          direction="row"
          spacing="4"
          pt={{ base: "15px", sm: "0px", md: "50px" }}
          pl={{ base: "0px", md: "50px" }}
          pb={{ md: "50px" }}
          justifyContent={"flex-start"}
          gap={"30px"}
          alignItems={"flex-start"}
        >
          <Heading mt={"20px"}>Contact Me</Heading>
          <Text>
            Please get in touch if you think our <br />
            work could be mutually beneficial!
          </Text>
          <VStack alignItems={"flex-start"} w={"100%"}>
            <Text>1234 Random Road</Text>
            <Text>Random Towm, California 12345</Text>
            <HStack mt={"20px"}>
              <PhoneIcon />
              <Text>555-555-5555</Text>
            </HStack>
            <HStack>
              <EmailIcon />
              <Text>person.is.not.real@gmail.com</Text>
            </HStack>
          </VStack>
          <HStack gap={"20px"}>
            <Image
              boxSize="50px"
              objectFit="contain"
              alt="white github logo"
              src="/assets/icons/github-mark-white.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Image
              boxSize="50px"
              objectFit="contain"
              alt="blue linked in logo"
              src="/assets/icons/linkedin-original.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Image
              boxSize="50px"
              objectFit="contain"
              alt="blue twitter bird logo"
              src="/assets/icons/Logo blue.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
          </HStack>
        </VStack>
        <Box
          boxSize={{
            base: "100%",
            md: "50%",
            xl: "40%",
          }}
          mt={"30px"}
          p={"30px"}
        >
          <Image
            alt="above the clouds in the sunset"
            src="/assets/images/nature.jpg"
            borderRadius={"xl"}
            boxShadow={"2xl"}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactMe;
