import { Grid, Heading } from "@chakra-ui/react";
import Project from "./Project";

function ProjectList() {
  const sizes =
    "(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 992px) 992px, 1280px";

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
          srcSet={`
    /assets/images/todolist1280.png 1280w,
    /assets/images/todolist992.png 992w,
    /assets/images/todolist768.png 768w,
    /assets/images/todolist480.png 480w`}
          src={`/assets/images/todolist480.png`}
          sizes={sizes}
          alt="Todolist Project"
          project={"This is a Todo-list Project"}
        />

        <Project
          srcSet={`
    /assets/images/memorycard1280.png 1280w,
    /assets/images/memorycard992.png 992w,
    /assets/images/memorycard768.png 768w,
    /assets/images/memorycard480.png 480w`}
          src={`/assets/images/memorycard480.png`}
          sizes={sizes}
          alt="Memory Card Project"
          project={"This is a Memory Card Project"}
        />

        <Project
          srcSet={`
    /assets/images/library1280.png 1280w,
    /assets/images/library992.png 992w,
    /assets/images/library768.png 768w,
    /assets/images/library480.png 480w`}
          src={`/assets/images/library480.png`}
          sizes={sizes}
          alt="Library Project"
          project={"This is a Library Project"}
        />

        <Project
          srcSet={`
    /assets/images/tictactoe1280.png 1280w,
    /assets/images/tictactoe992.png 992w,
    /assets/images/tictactoe768.png 768w,
    /assets/images/tictactoe480.png 480w`}
          src={`/assets/images/tictactoe480.png`}
          sizes={sizes}
          alt="Tictactoe Project"
          project={"This is a Tictactoe Project"}
        />

        <Project
          srcSet={`
    /assets/images/admin1280.png 1280w,
    /assets/images/admin992.png 992w,
    /assets/images/admin768.png 768w,
    /assets/images/admin480.png 480w`}
          src={`/assets/images/admin480.png`}
          sizes={sizes}
          alt="Admin Dashboard Project"
          project={"This is an Admin Dashboard Project"}
        />

        <Project
          srcSet={`
    /assets/images/battleship1280.png 1280w,
    /assets/images/battleship992.png 992w,
    /assets/images/battleship768.png 768w,
    /assets/images/battleship480.png 480w`}
          src={`/assets/images/battleship480.png`}
          sizes={sizes}
          alt="Battleship Project"
          project={"This is a Battleship Project"}
        />
      </Grid>
    </section>
  );
}

export default ProjectList;
