import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

const Title = styled.h1`
  font-size: 18px;
  color: white;
  margin: 0;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: gray;
  text-align: right;

  &:hover {
    color: #444444;
    cursor: pointer;
  }
`;

function HeaderComponent() {
  return (
    <HeaderContainer>
      <Title>Un-named Chatbot</Title>
      <Subtitle>By Aayan Mumtaz</Subtitle>
    </HeaderContainer>
  );
}

export default HeaderComponent;
