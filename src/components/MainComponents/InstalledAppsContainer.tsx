import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as IconAdobe } from "../../assets/icons/ic-adobe.svg";
import { ReactComponent as IconPhotoshop } from "../../assets/icons/ic-photoshop.svg";
import { ReactComponent as IconIllustrator } from "../../assets/icons/ic-illustrator.svg";
import { ReactComponent as IconAfterEffects } from "../../assets/icons/ic-after-effects.svg";
import styled from "@emotion/styled";

const getIcons = (name: string) => {
  switch (name) {
    case "Photoshop":
      return <IconPhotoshop />;
    case "Illustrator":
      return <IconIllustrator />;
    case "After Effects":
      return <IconAfterEffects />;
    default:
      return <IconAdobe />;
  }
};

const getColor = (status: string) => {
  switch (status) {
    case "Updated":
      return "#3bf083";
    case "Updated Available":
      return "#396df0";
    default:
      return "#3bf083";
  }
};

const installedData = [
  {
    name: "Photoshop",
    status: "Updated",
  },
  {
    name: "Illustrator",
    status: "Updated Available",
  },
  {
    name: "After Effects",
    status: "Updated",
  },
];

const StyledContainer = styled(Flex)`
  padding: 1rem 1.8rem;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #9297b321;
  border-top: 1px solid #71779040;
  transition: 0.3s;
  &:nth-child(3) {
    border-radius: 1.3rem 1.3rem 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 1.3rem 1.3rem;
  }
`;

const InstalledAppsContainer: React.FC = () => {
  return (
    <React.Fragment>
      {installedData.map(({ name, status }, index) => (
        <StyledContainer
          key={index}
          _hover={{
            bg: "#10121b66",
            cursor: "pointer",
          }}
        >
          <Box fontSize="2.8rem" mr="1.6rem">
            {getIcons(name)}
          </Box>
          <Text fontSize="1.6rem" color="#f9fafb">
            {name}
          </Text>
          <Flex alignItems="center" ml="auto" width="25rem">
            <Box
              h="0.6rem"
              w="0.6rem"
              borderRadius="50%"
              bg={getColor(status)}
              mr="1rem"
            />
            <Text fontSize="1.6rem" color="#f9fafb">
              {status}
            </Text>
          </Flex>
          <Flex alignItems="center" w="13.7rem" ml="auto">
            <Button
              bg="transparent"
              p="0.8rem 2.6rem"
              h="3.3rem"
              borderRadius="2rem"
              color="#f9fafb8c"
              fontWeight="400"
              fontSize="1.4rem"
              border="1px solid #f9fafb8c"
              transition="0.3s"
              _hover={{
                bg: "transparent",
              }}
            >
              Open
            </Button>
            <Flex ml="1.2rem">
              <Box
                w="0.5rem"
                h="0.5rem"
                bg="#f9fafb8c"
                borderRadius="50%"
                margin="0 0.2rem"
              />
              <Box
                w="0.5rem"
                h="0.5rem"
                bg="#f9fafb8c"
                borderRadius="50%"
                margin="0 0.2rem"
              />
              <Box
                w="0.5rem"
                h="0.5rem"
                bg="#f9fafb8c"
                borderRadius="50%"
                margin="0 0.2rem"
              />
            </Flex>
          </Flex>
        </StyledContainer>
      ))}
    </React.Fragment>
  );
};

export default InstalledAppsContainer;
