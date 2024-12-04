import React from "react";
import styled from "styled-components";
import HeaderComponent from "./Components/Header/HeaderComponent";
import InputComponent from "./Components/Inputs/InputComponent";

const HeaderImage = styled.img`
  width: 35px;
  border-radius: 100px;
  margin: 12px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const FooterComponent = styled.footer`
  position: absolute;
  bottom: 6px;
  left: 37.5%;
  font-size: smaller;
  color: gray;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: auto;
`;

function App() {
  return (
    <>
      <Header>
        <HeaderComponent />
        <HeaderImage src="public/Me.jpg" alt="Me" />
      </Header>
      <InputComponent />
      <FooterComponent>
        Un-named Bot can make mistakes. Check important info.
      </FooterComponent>
    </>
  );
}

export default App;
