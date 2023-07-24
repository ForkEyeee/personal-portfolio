import { Image, Flex, AspectRatio } from "@chakra-ui/react";
import AboutMe from "./AboutMe";

function Hero() {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        bgGradient={[
          "linear(to-t, teal.300,yellow.400,teal.300)",
          "linear(to-tr, blue.200,teal.500,blue.200)",
          "linear(to-br, orange.100,purple.300,orange.100)",
        ]}
        minHeight={{ base: "900px", lg: "600px" }}
        padding={{ base: "1rem", lg: "2rem" }}
      >
        <AspectRatio ratio={0.857} width={{ base: "80%", lg: "40%" }}>
          <Image
            objectFit="cover"
            src="/assets/images/parrot480.webp"
            alt="parrot perched on a branch"
          />
        </AspectRatio>
        <AboutMe />
      </Flex>
    </>
  );
}

export default Hero;
