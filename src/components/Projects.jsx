import { Grid, GridItem, Heading, Image, Box } from "@chakra-ui/react";

function Projects() {
  return (
    <>
      <Heading pt={"20px"} pb={"20px"} textAlign={"center"}>
        My Projects
      </Heading>
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
        ]} // changes the number of columns based on the breakpoint
        gap={10}
      >
        <GridItem>
          <Box boxShadow={"dark-lg"} boxSize="100%" objectFit="cover">
            <Image src="src\assets\images\battleship.PNG"></Image>
          </Box>
        </GridItem>
        <GridItem>
          {" "}
          <Box boxShadow={"dark-lg"} boxSize="100%" objectFit="cover">
            <Image src="src\assets\images\tictactoe.PNG"></Image>
          </Box>
        </GridItem>
        <GridItem>
          {" "}
          <Box boxShadow={"dark-lg"} boxSize="100%" objectFit="cover">
            <Image src="src\assets\images\todolist.PNG"></Image>
          </Box>
        </GridItem>
        <GridItem>
          <Box boxShadow={"dark-lg"} boxSize="100%" objectFit="cover">
            <Image src="src\assets\images\library.PNG"></Image>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Projects;
