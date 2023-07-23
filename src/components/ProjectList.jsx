import {
  Grid,
  GridItem,
  Heading,
  Image,
  Box,
  Flex,
  Text,
  VStack,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import Project from "./Project";
function ProjectList() {
  return (
    <div>
      <Heading pt={5} pb={5} textAlign={"center"} color={"teal.500"}>
        My Projects
      </Heading>

      <Grid
        p={5}
        templateRows="repeat(2, 1fr)"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        <Project imgSrc={"./src/assets/images/battleship.png"} />
        <Project imgSrc={"./src/assets/images/battleship.png"} />
        <Project imgSrc={"./src/assets/images/battleship.png"} />
        <Project imgSrc={"./src/assets/images/battleship.png"} />
        <Project imgSrc={"./src/assets/images/battleship.png"} />
        <Project imgSrc={"./src/assets/images/battleship.png"} />
      </Grid>
    </div>
  );
}

export default ProjectList;
