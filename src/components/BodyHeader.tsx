import {Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import HeaderLink from "./HeaderLink";

const headerLinks = [
  {
    id: "desktop",
    value: "Desktop",
    isActive: false,
  },
  {
    id: "mobile",
    value: "Mobile",
    isActive: false,
  },
  {
    id: "web",
    value: "Web",
    isActive: false,
  },
];

const BodyHeader = () => {
  return (
    <Flex
      alignItems="center"
      h="5.8rem"
      p="0 3rem"
      borderBottom="1px solid #71779040"
    >
      <Text fontSize="1.6rem" color="#f9fafb">
        All Apps
      </Text>
      <Stack direction="row" ml="25rem">
        {headerLinks.map(({ id, value, isActive }) => (
          <HeaderLink isActive={isActive} key={id} value={value} />
        ))}
      </Stack>
    </Flex>
  );
};

export default BodyHeader;
