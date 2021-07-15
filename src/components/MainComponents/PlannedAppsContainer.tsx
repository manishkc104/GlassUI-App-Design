import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as IconPhotoshop } from "../../assets/icons/ic-photoshop.svg";
import { ReactComponent as IconPremiere } from "../../assets/icons/ic-premiere.svg";
import { ReactComponent as IconAfterEffects } from "../../assets/icons/ic-after-effects.svg";
import { ReactComponent as IconIn } from "../../assets/icons/ic-inDesign.svg";

const getIcons = (name: string) => {
  switch (name) {
    case "Premiere Pro":
      return <IconPremiere />;
    case "InDesgin":
      return <IconIn />;
    case "After Effects":
      return <IconAfterEffects />;
    default:
      return <IconPhotoshop />;
  }
};

const plannedData = [
  {
    name: "Premiere Pro",
    description: "Edit, master and create fully proffesional videos",
  },
  {
    name: "InDesign",
    description: "Design and publish great projects & mockups",
  },
  {
    name: "After Effects",
    description: "Industry standard motion graphics & visual effectsz",
  },
];

const PlannedAppsContainer: React.FC = () => {
  return (
    <Stack direction="row" spacing="2rem" justifyContent="space-between">
      {plannedData.map(({ name, description }, index) => (
        <Flex
          direction="column"
          w="34rem"
          h="20rem"
          key={index}
          borderRadius="1.4rem"
          padding="2rem"
          transition="0.3s"
          bg="#9297b321"
          border="1px solid #10121b66"
          _hover={{
            transform: "scale(1.04)",
            bg: "#10121b66",
          }}
        >
          <Flex alignItems="center">
            <Box fontSize="2.8rem" mr="1.6rem">
              {getIcons(name)}
            </Box>
            <Text fontSize="1.6rem" color="#f9fafb">
              {name}
            </Text>
          </Flex>
          <Text
            fontSize="1.4rem"
            fontWeight="400"
            mt="2rem"
            lineHeight="1.6em"
            color="#f9fafb"
            borderBottom="1px solid #71779040"
            paddingBottom="2rem"
          >
            {description}
          </Text>
          <Flex alignItems="center" justifyContent="flex-end">
            <Button
              bg="#3a6df0"
              p="0.8rem 2.6rem"
              h="3.3rem"
              w="10rem"
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
              Update
            </Button>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
};

export default PlannedAppsContainer;
