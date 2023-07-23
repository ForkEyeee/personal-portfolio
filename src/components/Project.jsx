import { GridItem, Image, Box, Text, VStack, HStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

function Project({ imgSrc = "src/assets/images/A_black_image.jpg" }) {
  return (
    <>
      <GridItem>
        <Box position="relative" boxShadow="2xl" h="100%" borderRadius="md">
          <Image borderRadius="md" src={imgSrc} />
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
              <Text>This is a project description</Text>
              <HStack
                justifyContent={"flex-end"}
                gap={"20px"}
                cursor={"pointer"}
              >
                <Image
                  boxSize="12%"
                  objectFit="cover"
                  src="src\assets\icons\github-mark-white.svg"
                  _hover={{ transform: "scale(1.2)" }}
                />
                <Image
                  boxSize="12%"
                  objectFit="cover"
                  src="src\assets\icons\linkedin-original.svg"
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
  imgSrc: PropTypes.string.isRequired,
};

export default Project;
