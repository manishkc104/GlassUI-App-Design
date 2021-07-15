import React from "react";
import styled from "@emotion/styled";
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react";
import { ReactComponent as IconAdobe } from "../assets/icons/ic-adobe.svg";

const StyledBannerContainer = styled(Flex)`
  align-items: center;
  width: 100%;
  justify-content: space-between;
  border-radius: 1.4rem;
  padding: 2rem 4rem;
  transition: 0.3s;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
    linear-gradient(
      to right top,
      #cf4af3,
      #e73bd7,
      #f631bc,
      #fd31a2,
      #ff3a8b,
      #ff4b78,
      #ff5e68,
      #ff705c,
      #ff8c51,
      #ffaa49,
      #ffc848,
      #ffe652
    );
`;

const Banner = () => {
  return (
    <StyledBannerContainer
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      <Flex direction="column" maxWidth="35rem">
        <Flex alignItems="center">
          <Box fontSize="2.8rem" mr="1.4rem">
            <IconAdobe />
          </Box>
          <Text color="#f9fafb" fontSize="1.7rem" fontWeight="500">
            Adobe Stock
          </Text>
        </Flex>
        <Text color="#ebecec" fontWeight="400" mt="1.8rem" fontSize="1.4rem">
          Grab yourself 10 free images from Adobe Stock in a 30-day free trial
          plan and find perfect image, that will help you with your new project.
        </Text>
        <Button
          bg="#3a6df0"
          p="0.8rem 2.6rem"
          h="3.3rem"
          w="15rem"
          borderRadius="2rem"
          color="#ffffff"
          fontWeight="400"
          fontSize="1.4rem"
          mt="1.8rem"
          transition="0.3s"
          _hover={{
            bg: "#1e59f1",
          }}
        >
          Start free trail
        </Button>
      </Flex>
      <Image
        boxSize="186px"
        mt="-3rem"
        objectFit="cover"
        src="https://assets.codepen.io/3364143/glass.png"
        alt="Dan Abramov"
      />
    </StyledBannerContainer>
  );
};

export default Banner;
