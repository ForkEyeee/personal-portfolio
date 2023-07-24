import { Image, Flex, AspectRatio } from "@chakra-ui/react";
import AboutMe from "./AboutMe";

function Hero() {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={{
          base: "red",
          sm: "blue",
          md: "orange",
          lg: "pink",
          xl: "green",
        }}
        minHeight={{ base: "900px", lg: "600px" }}
        padding={{ base: "1rem", lg: "2rem" }}
      >
        <AspectRatio
          ratio={0.857}
          width={{ base: "80%", sm: "70%", md: "60%", lg: "40%", xl: "30%" }}
        >
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
