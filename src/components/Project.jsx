import {
  Grid,
  GridItem,
  Heading,
  Image,
  Box,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

function Project({ imgSrc }) {
  console.log(imgSrc);
  return (
    <>
      <GridItem>
        <Box position="relative" boxShadow="xl" h="100%" borderRadius="md">
          <Image
            borderRadius="md"
            // boxSize="100%"
            objectFit="cover"
            src={imgSrc}
            loading="lazy"
          />
          <VStack
            position="absolute"
            bottom="0"
            bg="rgba(0,0,0,0.7)"
            color="white"
            p={4}
            width="100%"
            borderRadius="md"
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>This is a Battleship project description</Text>
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
            </Flex>
          </VStack>
        </Box>
      </GridItem>

      {/* <GridItem>
        <Box position="relative" boxShadow="xl" h="200px" borderRadius="md">
          <Image
            borderRadius="md"
            boxSize="100%"
            objectFit="cover"
            src="src\assets\images\tictactoe.PNG"
          />
          <VStack
            position="absolute"
            bottom="0"
            bg="rgba(0,0,0,0.7)"
            color="white"
            p={4}
            width="100%"
            borderRadius="md"
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>This is a Tic Tac Toe project description.</Text>
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
            </Flex>
          </VStack>
        </Box>
      </GridItem>

      <GridItem>
        <Box position="relative" boxShadow="xl" h="200px" borderRadius="md">
          <Image
            borderRadius="md"
            boxSize="100%"
            objectFit="cover"
            src="src\assets\images\todolist.PNG"
          />
          <VStack
            position="absolute"
            bottom="0"
            bg="rgba(0,0,0,0.7)"
            color="white"
            p={4}
            width="100%"
            borderRadius="md"
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>This is a To-Do List project description.</Text>
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
            </Flex>
          </VStack>
        </Box>
      </GridItem>

      <GridItem>
        <Box position="relative" boxShadow="xl" h="200px" borderRadius="md">
          <Image
            borderRadius="md"
            boxSize="100%"
            objectFit="cover"
            src="src\assets\images\library.PNG"
          />
          <VStack
            position="absolute"
            bottom="0"
            bg="rgba(0,0,0,0.7)"
            color="white"
            p={4}
            width="100%"
            borderRadius="md"
          >
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text>This is a Library project description.</Text>
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
            </Flex>
          </VStack>
        </Box>
      </GridItem> */}
    </>
  );
}

export default Project;
