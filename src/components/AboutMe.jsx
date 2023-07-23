import {
  Box,
  Image,
  Card,
  CardBody,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";

function AboutMe() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      maxH="500px"
      mt={"20px"}
    >
      <Card
        maxW={{
          base: "300px",
          sm: "400px",
          md: "500px",
          lg: "600px",
          xl: "700px",
        }}
        boxShadow={"2xl"}
        mb={{ base: "20px", md: "30px", xl: "60px" }}
      >
        <CardBody>
          <Heading>About Me</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            urna massa. Morbi condimentum blandit eros, vitae iaculis risus
            congue sed. Maecenas eget nunc consequat, convallis metus ac,
            tristique ante. Nulla ac urna finibus, efficitur lectus in, semper
            nunc. Integer aliquet ligula nec nisi elementum, in ultricies est
            cursus. Suspendisse vel mauris non tellus pellentesque aliquam.
            Aenean vitae lacinia ligula. Etiam auctor massa sit amet nunc
            fermentum, non blandit metus interdum.{" "}
          </Text>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default AboutMe;