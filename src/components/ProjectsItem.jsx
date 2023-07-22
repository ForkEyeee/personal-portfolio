import { Grid, GridItem, Heading } from "@chakra-ui/react";

function Projects() {
  return (
    <>
      <Heading>My Projects</Heading>
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" />
        <GridItem bg="tomato" />
        <GridItem bg="papayawhip" />
      </Grid>
    </>
  );
}

export default Projects;
