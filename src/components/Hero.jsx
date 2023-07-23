import {
  Box,
  Image,
  Card,
  CardBody,
  Text,
  Flex,
  Heading,
  Divider,
} from "@chakra-ui/react";
import AboutMe from "./AboutMe";
function Hero() {
  return (
    <div>
      <Flex
        flexDirection={["column", "column", "row", "row", "row"]}
        bgColor={{
          base: "red",
          sm: "blue",
          md: "orange",
          lg: "pink",
          xl: "green",
        }}
        alignItems={"center"}
        justifyContent={"center"}
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        gap={{ md: "50px" }}
        maxH={{ base: "none", sm: "none" }}
      >
        <Box
          boxSize={{
            base: "200px",
            sm: "300px",
            md: "300px",
            lg: "400px",
            xl: "500px",
          }}
          boxShadow={"dark-lg"}
          height={{
            base: "auto",
            sm: "auto",
            md: "auto",
            lg: "auto",
            xl: "auto",
          }}
          mt={{ base: "20px" }}
          mb={{ base: "10px", md: "30px", xl: "60px" }}
        >
          <Image src="src\assets\images\main-image.jpg" alt="" maxH="100%" />
        </Box>
        <AboutMe />
      </Flex>
    </div>
  );
}

export default Hero;
