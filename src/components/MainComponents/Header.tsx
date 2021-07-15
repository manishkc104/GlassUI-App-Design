import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Dot from "../Dot";
import HeaderLink from "../HeaderLink";
import InputFiled from "../InputField";

const windowButtonOption = [
  {
    id: "close",
    type: "Red",
  },
  {
    id: "expand",
    type: "Yellow",
  },
  {
    id: "minimize",
    type: "Green",
  },
];

const headerLinks = [
  {
    id: "apps",
    value: "Apps",
    isActive: true,
  },
  {
    id: "yourWork",
    value: "Your Work",
    isActive: false,
  },
  {
    id: "discover",
    value: "Discover",
    isActive: false,
  },
  {
    id: "market",
    value: "Market",
    isActive: true,
  },
];

const Header: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      padding="0 3rem"
      borderBottom="1px solid #71779040"
    >
      <Stack direction="row" spacing="1rem" marginRight="15rem">
        {windowButtonOption.map(({ id, type }) => (
          <Dot key={id} color={type} />
        ))}
      </Stack>
      <Stack direction="row">
        {headerLinks.map(({ id, value, isActive }) => (
          <HeaderLink isActive={isActive} key={id} value={value} />
        ))}
      </Stack>
      <Box
        h="4rem"
        display="flex"
        width="34rem"
        marginLeft="1.6rem"
        borderRadius="0.4rem"
      >
        <InputFiled />
      </Box>
    </Flex>
  );
};

export default Header;
