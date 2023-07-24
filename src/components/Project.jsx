import { GridItem, Image, Box, Text, VStack, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

function Project({ srcSet, src, sizes, alt, project }) {
  return (
    <>
      <GridItem>
        <Box position="relative" boxShadow="2xl" h="100%" borderRadius="md">
          <Image srcSet={srcSet} src={src} sizes={sizes} alt={alt} />

          <VStack
            position="absolute"
            bottom="0"
            bg="rgba(0,0,0,0.7)"
            color="white"
            p={4}
            width="100%"
            borderRadius="md"
          >
            <HStack>
              <Text>{project}</Text>
              <HStack
                justifyContent={"flex-end"}
                gap={"20px"}
                cursor={"pointer"}
              >
                <Image
                  boxSize="12%"
                  objectFit="cover"
                  src="/assets/icons/github-mark-white.svg"
                  alt="github logo"
                  _hover={{ transform: "scale(1.2)" }}
                />
                <Image
                  boxSize="12%"
                  objectFit="cover"
                  src="/assets/icons/linkedin-original.svg"
                  alt="linked in logo"
                  _hover={{ transform: "scale(1.2)" }}
                />
              </HStack>
            </HStack>
          </VStack>
        </Box>
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
