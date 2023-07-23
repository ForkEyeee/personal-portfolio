import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  VStack,
  Image,
  HStack,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

function ContactMe() {
  return (
    <Box bg="gray.600" color="white" p="4">
      <Flex
        justify="space-evenly"
        direction={{ base: "column", sm: "column", md: "row" }}
        alignItems={{ base: "center" }}
      >
        <VStack
          direction={{
            base: "row",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          spacing="4"
          pt={{ base: "15px", sm: "0px", md: "50px", lg: "50px", xl: "50px" }}
          pl={{ base: "0px", sm: "0px", md: "50px", lg: "50px", xl: "50px" }}
          pb={{ md: "50px" }}
          justifyContent={"flex-start"}
          gap={"30px"}
          alignItems={"flex-start"}
        >
          <Heading mt={{ base: "20px" }}>Contact Me</Heading>
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
          <HStack gap={{ base: "20px", sm: "20px" }}>
            <Image
              boxSize="50px"
              objectFit="contain"
              src="src\assets\icons\github-mark-white.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Image
              boxSize="50px"
              objectFit="contain"
              src="src\assets\icons\linkedin-original.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
            <Image
              boxSize="50px"
              objectFit="contain"
              src="src\assets\icons\Logo blue.svg"
              _hover={{ transform: "scale(1.2)" }}
            />
          </HStack>
        </VStack>
        <Box
          boxSize={{
            base: "100%",
            sm: "100%",
            md: "50%",
            lg: "50%",
            xl: "40%",
          }}
          mt={{ base: "30px" }}
          p={{ base: "30px" }}
        >
          <Image
            src="src\assets\images\nature7.jpg"
            alt=""
            borderRadius={"xl"}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactMe;
