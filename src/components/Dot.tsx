import { Box } from "@chakra-ui/react";
import React from "react";

interface IProps {
  color: string;
}

const getColor = (color: string) => {
  switch (color) {
    case "Yellow":
      return "#f8ce52";
    case "Red":
      return "#f96057";
    default:
      return "#5fcf65";
  }
};

const Dot: React.FC<IProps> = ({ color }) => {
  return (
    <Box bg={getColor(color)} h="1.5rem" w="1.5rem" borderRadius="50%" />
  );
};

export default Dot;
