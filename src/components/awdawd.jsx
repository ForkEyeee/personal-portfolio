<Flex
  flexDirection={{ base: "column", sm: "row" }}
  bgColor={{ base: "red", sm: "blue" }}
  alignItems={"center"}
  justifyContent={"center"}
  // height={"500px"}
  // sx={{
  //   background: "linear-gradient(to top left, white 50%, blue 50%)",
  // }}
  className="test"
>
  <Box mt={"50px"} ml={"60px"} width={"15%"} position={"relative"}>
    <Image
      src="src\assets\images\main-image.jpg"
      alt="Dan Abramov"
      boxShadow={"dark-lg"}
      minW={"300px"}
      // width={"100%"}
      height={"auto"}
      objectFit="cover"
    />
    <Text
      position="absolute"
      top="92%"
      left="35%"
      color="white"
      fontSize="xl"
      fontWeight="bold"
      zIndex={"1"}
    >
      ForkEyeee
    </Text>
  </Box>
  <Card
    size={"100%"}
    boxShadow={"2xl"}
    transform={"translateY(20px)"}
    // minW={"50%"}
    maxW={"30%"}
  >
    <CardBody>
      <Heading pb={"20px"}>About Me</Heading>
      <Box flexDirection={"column"}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae urna
          massa. Morbi condimentum blandit eros, vitae iaculis risus congue sed.
          Maecenas eget nunc consequat, convallis metus ac, tristique ante.
          Nulla ac urna finibus, efficitur lectus in, semper nunc. Integer
          aliquet ligula nec nisi elementum, in ultricies est cursus.
          Suspendisse vel mauris non tellus pellentesque aliquam. Aenean vitae
          lacinia ligula. Etiam auctor massa sit amet nunc fermentum, non
          blandit metus interdum.
        </Text>
      </Box>
      <Flex boxSize={"20"} width={"100%"} justifyContent={"flex-end"}>
        <Image src="src\assets\icons\github-original.svg"></Image>
        <Image src="src\assets\icons\linkedin-plain.svg"></Image>
      </Flex>
    </CardBody>
  </Card>
</Flex>;
