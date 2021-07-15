import React from "react";
import { Box, Text, Link, Stack } from "@chakra-ui/react";

interface IProps {
  value: string;
  icon: any;
}

const SidebarLink: React.FC<IProps> = ({ value, icon }) => {
  return (
    <Link
      padding="1rem"
      transition="0.3s"
      borderRadius="0.6rem"
      _hover={{ textDecoration: "none", backgroundColor: "#0c0f194d" }}
    >
      <Stack direction="row" alignItems="center" spacing="1rem">
        <Box fontSize="1.6rem" color="#f9fafb">
          {icon}
        </Box>
        <Text fontSize="1.4rem" color="#f9fafb" font-weight="400">
          {value}
        </Text>
      </Stack>
    </Link>
  );
};

export default SidebarLink;
