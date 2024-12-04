import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: gray;
`;

function HeaderComponent() {
  return (
    <HeaderContainer>
      <Title>Named Chatbot</Title>
      <Subtitle>By Aayan Mumtaz</Subtitle>
    </HeaderContainer>
  );
}

export default HeaderComponent;
