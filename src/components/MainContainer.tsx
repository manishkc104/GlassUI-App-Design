import React from "react";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/react";

const Container = styled(Box)`
  background-image: url(https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-dark-wwdc-2020-5120x2880-1432.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer: React.FC = ({ children }) => {
  return (
    <Container>
      <Box
        bg="primary.100"
        width="125rem"
        height="90vh"
        display="flex"
        flexDirection="column"
        borderRadius="1.4rem"
        backdropFilter="blur(20px)"
      >
        {children}
      </Box>
    </Container>
  );
};

export default MainContainer;
