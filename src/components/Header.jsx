import {
  Box,
  Image,
  Card,
  CardBody,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";

function Header() {
  return (
    <div>
      <Flex
        flexDirection={["column", "column", "row", "row", "row"]}
        bgColor={{
          base: "red",
          sm: "blue",
          md: "orange",
          lg: "pink",
          xl: "green",
        }}
        alignItems={"center"}
        justifyContent={"center"}
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
        gap={{ base: "50px", sm: "50px", md: "50px" }}
        maxH={{ base: "none", sm: "none" }}
      >
        <Box
          boxSize={{
            base: "200px",
            sm: "300px",
            md: "300px",
            lg: "400px",
            xl: "500px",
          }}
          boxShadow={"dark-lg"}
          height={{
            base: "auto",
            sm: "auto",
            md: "auto",
            lg: "auto",
            xl: "auto",
          }}
          mt={{ base: "20px" }}
          mb={{ md: "30px", xl: "130px" }}
        >
          <Image src="src\assets\images\main-image.jpg" alt="" maxH="100%" />
        </Box>
        <Card
          maxW={{
            base: "300px",
            sm: "400px",
            md: "500px",
            lg: "600px",
            xl: "700px",
          }}
          boxShadow={"2xl"}
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
    </div>
  );
}

export default Header;
