import React from "react";
import styled from "styled-components";
import HeaderComponent from "./Components/Header/HeaderComponent";
import InputComponent from "./Components/Inputs/InputComponent";
import { CiChat1 } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";

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

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

function App() {
  return (
    <>
      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CiChat1
            style={{
              margin: "0 12px 0 0",
              fontSize: "xx-large",
            }}
          />
          <HeaderComponent />
          <MdExpandMore
            style={{
              fontSize: "x-large",
            }}
          />
        </div>
        <HeaderImage src="public/Me.jpg" alt="Me" />
      </Header>
      <Main>
        <InputComponent />
      </Main>
      <FooterComponent>
        Un-named Bot can make mistakes. Check important info.
      </FooterComponent>
    </>
  );
}

export default App;
