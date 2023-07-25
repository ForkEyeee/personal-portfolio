import { Image, Flex, AspectRatio } from "@chakra-ui/react";
import AboutMe from "./AboutMe";

function Hero() {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        bgGradient={[
          "linear(to-t, teal.300,yellow.400,teal.300)",
          "linear(to-tr, blue.200,teal.500,blue.200)",
          "linear(to-br, orange.100,purple.300,orange.100)",
        ]}
        minH={{ base: "900px", lg: "600px" }}
        padding={{ base: "1rem", lg: "2rem" }}
      >
        <AspectRatio ratio={0.857} minW={{ base: "60%", lg: "30%", xl: "20%" }}>
          <Image
            boxShadow={"2xl"}
            srcSet={`
            /assets/images/parrot1280.webp 1280w,
            /assets/images/parrot992.webp 992w,
            /assets/images/parrot768.webp 768w,
            /assets/images/parrot480.webp 480w`}
            sizes={
              "(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 992px) 992px, 1280px"
            }
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
