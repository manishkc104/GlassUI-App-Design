import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import MainContainer from "./components/MainContainer";
import "./App.css";
import Header from "./components/MainComponents/Header";
import Sidebar from "./components/MainComponents/Sidebar";
import BodyContainer from "./components/MainComponents/BodyContainer";
import { Link } from "@chakra-ui/layout";

function App() {
  return (
    <React.Fragment>
      <MainContainer position="relative">
        <Header />
        <Flex flexGrow="1">
          <Sidebar />
          <BodyContainer />
        </Flex>
        <Text
          color="#f9fafb"
          fontSize="1.5rem"
          position="absolute"
          bottom="-4rem"
          left="60rem"
        >
          Inspired By - &nbsp;
          <Link href="https://dribbble.com/shots/14831798-Glassmorphism-Big-Sur-Creative-Cloud-App-Redesign/attachments/6540384?mode=media">
            Mikołaj Gałęziowski
          </Link>
        </Text>
      </MainContainer>
    </React.Fragment>
  );
}

export default App;
