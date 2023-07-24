import { Box, Image, Flex, AspectRatio } from "@chakra-ui/react";
import AboutMe from "./AboutMe";

function Hero() {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        bgColor={{
          base: "red",
          sm: "blue",
          md: "orange",
          lg: "pink",
          xl: "green",
        }}
        h={"900px"}
      >
        <AspectRatio ratio={"0.857"} width="80%">
          <Image
            objectFit="cover"
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
