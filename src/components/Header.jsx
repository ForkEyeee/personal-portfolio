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
        justifyContent={"center"}
        flexDirection={["column", "column", "row", "row", "row"]}
        bgColor={{
          base: "red",
          sm: "blue",
          md: "orange",
          lg: "pink",
          xl: "green",
        }}
        alignItems={"center"}
        bgGradient={[
          "linear(to-tr, teal.300, yellow.400)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, orange.100, purple.300)",
        ]}
      >
        <Box
          boxSize={{
            base: "200px",
            sm: "300px",
            md: "250px",
            lg: "400px",
            xl: "500px",
          }}
          pt={{ base: "20px" }}
        >
          <Image src="src\assets\images\main-image.jpg" alt="" />
        </Box>
        <Card
          maxW={{
            base: "250px",
            sm: "400px",
            md: "500px",
            lg: "600px",
            xl: "700px",
          }}
          mt={{ base: "70px" }}
        >
          <CardBody>
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
