import { Box, Image, Flex } from "@chakra-ui/react";
import AboutMe from "./AboutMe";

function Hero() {
  return (
    <div>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        bgGradient={{
          base: "linear(to-t, green.500, blue.500)",
          md: "linear(to-t, orange.400, pink.200)",
        }}
        gap={{ md: "50px" }}
        maxH="none"
      >
        <Box
          w={{
            base: "200px",
            md: "300px",
            lg: "400px",
            xl: "500px",
          }}
          boxShadow={"dark-lg"}
          ml={{ md: "20px" }}
          mt={"20px"}
          mb={{ base: "10px", md: "30px", xl: "60px" }}
        >
          <Image
            src="src\assets\images\parrot.jpg"
            alt="parrot perched on a branch"
            maxH="50%"
          />
        </Box>
        <AboutMe />
      </Flex>
    </div>
  );
}

export default Hero;
