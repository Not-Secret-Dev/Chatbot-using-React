import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: gray;
  text-align: right;
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
