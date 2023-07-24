import {
  GridItem,
  Image,
  Box,
  Text,
  VStack,
  HStack,
  AspectRatio,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function Project({ srcSet, src, sizes, alt, project }) {
  return (
    <>
      <GridItem className="woof">
        <AspectRatio className="meow" maxH={"300px"}>
          <Box
            position="relative"
            boxShadow="2xl"
            borderRadius="md"
            maxH={"85%"}
          >
            <Image
              srcSet={srcSet}
              src={src}
              sizes={sizes}
              alt={alt}
              objectFit={"cover"}
            />

            <VStack
              position="absolute"
              bottom="0"
              bg="rgba(0,0,0,0.7)"
              color="white"
              p={4}
              width="100%"
              borderRadius="md"
              className="sss"
              justifyContent={"center"}
            >
              <HStack
                className="testing"
                justifyContent={"space-around"}
                w={"100%"}
              >
                <Text fontSize={"12px"}>{project}</Text>
                <HStack gap={"15px"} cursor={"pointer"}>
                  <Image
                    h={"19.33px"}
                    w={"19.33px"}
                    // objectFit="cover"
                    src="/assets/icons/github-mark-white.svg"
                    alt="github logo"
                    _hover={{ transform: "scale(1.2)" }}
                  />
                  <Image
                    h={"19.33px"}
                    w={"19.33px"}
                    // objectFit="cover"
                    src="/assets/icons/linkedin-original.svg"
                    alt="linked in logo"
                    _hover={{ transform: "scale(1.2)" }}
                  />
                </HStack>
              </HStack>
            </VStack>
          </Box>
        </AspectRatio>
      </GridItem>
    </>
  );
}

Project.propTypes = {
  srcSet: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default Project;
