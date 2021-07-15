import React from "react";
import { Box, Link } from "@chakra-ui/layout";

interface IProps {
  isActive: boolean;
  value: string;
}

const HeaderLink: React.FC<IProps> = ({ isActive, value }) => {
  return (
    <Box
      padding="2rem 2.4rem"
      position="relative"
      margin="0"
      _hover={{
        borderBottom: "1px solid #f9fafb",
      }}
    >
      <Link
        color="#717790c7"
        fontSize="1.5rem"
        _hover={{
          color: "#f9fafb",
          textDecoration: "none",
        }}
      >
        {value}
      </Link>
      {isActive ? (
        <Box
          position="absolute"
          bg="#3a6df0"
          w="0.6rem"
          right="2rem"
          top="1.6rem"
          h="0.6rem"
          borderRadius="50%"
        />
      ) : null}
    </Box>
  );
};

export default HeaderLink;
