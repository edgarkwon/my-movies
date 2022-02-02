import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Loader = () => (
  <Wrapper>
    <ActivityIndicator color="black" />
  </Wrapper>
);

export default Loader;
