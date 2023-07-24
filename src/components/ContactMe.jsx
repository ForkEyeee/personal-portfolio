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
    <Box bg="gray.600" color="white" p={[2, 4, 6]}>
      <Flex
        direction={["column", "row"]}
        justify="space-evenly"
        align="center"
        p={4}
      >
        <VStack spacing={4} align="start">
          <Heading mt={4}>Contact Me</Heading>
          <Text>
            Please get in touch if you think our <br />
            work could be mutually beneficial!
          </Text>
          <VStack align="start" spacing={2}>
            <Text>1234 Random Road</Text>
            <Text>Random Town, California 12345</Text>
            <HStack mt={2}>
              <PhoneIcon />
              <Text>555-555-5555</Text>
            </HStack>
            <HStack mt={2}>
              <EmailIcon />
              <Text>person.is.not.real@gmail.com</Text>
            </HStack>
          </VStack>
          <HStack spacing={4} mt={4}>
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
        <Box width="full" maxW={{ md: "50%", xl: "40%" }} mt={[4, 4, 0]} p={4}>
          <Image
            srcSet={`
              /assets/images/writing1280.webp 1280w,
              /assets/images/writing992.webp 992w,
              /assets/images/writing768.webp 768w,
              /assets/images/writing480.webp 480w`}
            sizes={
              "(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 992px) 992px, 1280px"
            }
            src="/assets/images/writing480.webp"
            alt="person writing on paper"
            borderRadius="xl"
            boxShadow="2xl"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default ContactMe;
