import { Flex } from "@chakra-ui/react";
import React from "react";
import BodyHeader from "../BodyHeader";
import MainBodyContainer from "../MainBodyContainer";

const BodyContainer = () => {
  return (
    <Flex flexGrow={1} direction="column" overflow="hidden">
      <BodyHeader />
      <MainBodyContainer />
    </Flex>
  );
};

export default BodyContainer;
