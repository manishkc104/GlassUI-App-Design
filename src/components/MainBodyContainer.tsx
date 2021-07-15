import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Banner from "./Banner";
import InstalledAppsContainer from "./MainComponents/InstalledAppsContainer";
import PlannedAppsContainer from "./MainComponents/PlannedAppsContainer";

const MainBodyContainer = () => {
  return (
    <Flex
      direction="column"
      p="2rem 4rem"
      h="100%"
      bg="#10121b66"
      overflow="auto"
    >
      <Banner />
      <Text color="#999ba5" mt="3rem" mb="1.4rem" fontSize="1.5rem">
        Installed
      </Text>
      <InstalledAppsContainer />
      <Text color="#999ba5" mt="3rem" mb="1.4rem" fontSize="1.5rem">
        Apps in your plan
      </Text>
      <PlannedAppsContainer />
    </Flex>
  );
};

export default MainBodyContainer;
