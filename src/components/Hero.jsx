import { Box, Image, Flex } from "@chakra-ui/react";
import AboutMe from "./AboutMe";

function Hero() {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        // bgGradient={{
        //   base: "linear(to-t, green.500, blue.500)",
        //   md: "linear(to-t, orange.400, pink.200)",
        // }}
        bgColor={{
          base: "red",
          sm: "blue",
          md: "orange",
          lg: "pink",
          xl: "green",
        }}
        h={"1000px"}
        // gap={{ md: "50px" }}
        // overflow={"hidden"}
      >
        <Box
          // w={{
          //   base: "200px",
          //   md: "300px",
          //   lg: "400px",
          //   xl: "500px",
          // }}

          h={"500px"}
          // boxShadow={"dark-lg"}
          // overflow={"hidden"}
          // ml={{ md: "20px" }}
          // mt={"20px"}
          // mb={{ base: "10px", md: "30px", xl: "60px" }}
        >
          <Image
            srcSet={`
    /assets/images/parrot1280.webp 1280w,
    /assets/images/parrot992.webp 992w,
    /assets/images/parrot768.webp 768w,
    /assets/images/parrot480.webp 480w`}
            sizes={
              "(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 992px) 992px, 1280px"
            }
            src="/assets/images/parrot480.webp"
            // boxShadow={"2xl"}
            // maxH="50%"
            alt="parrot perched on a branch"
          />
        </Box>
        <AboutMe />
      </Flex>
    </>
  );
}

export default Hero;
