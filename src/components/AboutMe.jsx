import { Card, CardBody, Text, Flex, Heading, VStack } from "@chakra-ui/react";

function AboutMe() {
  return (
    <Flex
      direction="column"
      align="center"
      justifyContent="center"
      maxW={{ base: "100%", sm: "80%", md: "70%", lg: "50%", xl: "30%" }}
      minHeight="50vh"
      padding={{ base: "1rem", lg: "2rem" }}
    >
      <Card width="100%" boxShadow={"2xl"}>
        <CardBody>
          <VStack gap={"15px"}>
            <Heading>About Me</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              urna massa. Morbi condimentum blandit eros, vitae iaculis risus
              congue sed. Maecenas eget nunc consequat, convallis metus ac,
              tristique ante. Nulla ac urna finibus, efficitur lectus in, semper
              nunc. Integer aliquet ligula nec nisi elementum, in ultricies est
              cursus. Suspendisse vel mauris non tellus pellentesque aliquam.
              Aenean vitae lacinia ligula. Etiam auctor massa sit amet nunc
              fermentum, non blandit metus interdum.
            </Text>
          </VStack>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default AboutMe;
