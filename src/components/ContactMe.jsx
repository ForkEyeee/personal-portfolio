import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

function ContactMe() {
  return (
    <Box bg="gray.600" color="white" p="4">
      <Flex justify="space-between">
        <Box>
          <Text>Personal Portfolio</Text>
          <Text>&copy; {new Date().getFullYear()}</Text>
        </Box>
        <Stack
          direction={{
            base: "row",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          spacing="4"
        >
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </Stack>
      </Flex>
    </Box>
  );
}

export default ContactMe;
