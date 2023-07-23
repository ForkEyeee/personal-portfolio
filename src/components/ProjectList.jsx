import { Grid, Heading } from "@chakra-ui/react";
import Project from "./Project";

function ProjectList() {
  return (
    <section>
      <Heading
        pt={10}
        pb={10}
        textAlign={"center"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        color={"teal.500"}
      >
        My Projects
      </Heading>

      <Grid
        p={5}
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gap={10}
      >
        <Project
          imgSrc={
            "/assets/images/1920x1080-blue-ncs-solid-color-background.jpg"
          }
        />
        <Project
          imgSrc={
            "/assets/images/1920x1080-blue-violet-solid-color-background.jpg"
          }
        />
        <Project
          imgSrc={
            "/assets/images/1920x1080-blue-pigment-solid-color-background.jpg"
          }
        />
        <Project
          imgSrc={
            "/assets/images/1920x1080-boston-university-red-solid-color-background.jpg"
          }
        />
        <Project
          imgSrc={
            "/assets/images/1920x1080-bright-green-solid-color-background.jpg"
          }
        />
        <Project
          imgSrc={
            "/assets/images/1920x1080-brilliant-rose-solid-color-background.jpg"
          }
        />
      </Grid>
    </section>
  );
}

export default ProjectList;
