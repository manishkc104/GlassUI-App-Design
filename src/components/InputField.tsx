import React from "react";
import styled from "@emotion/styled";
import { Input } from "@chakra-ui/react";

const StyledInput = styled(Input)`
  height: 100%;
  width: 100%;
  padding: 0 2rem 0 4rem;
  font-size: 1.4rem;
  border-radius: 0.4rem;
`;

const InputFiled: React.FC = () => {
  return (
    <StyledInput
      bg="#14162b"
      placeholder="Search"
      boxShadow="0 0 0 2px rgba(134, 140, 160, 0.02)"
      border="none"
      color="#f9fafb"
      _focus={{
        boxShadow: "none",
        border: "none",
      }}
      _hover={{
        boxShadow: "none",
        border: "none",
      }}
    />
  );
};

export default InputFiled;
