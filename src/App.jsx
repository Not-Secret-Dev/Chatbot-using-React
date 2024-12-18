import React from "react";
import styled from "styled-components";
import HeaderComponent from "./Components/Header/HeaderComponent";
import InputComponent from "./Components/Inputs/InputComponent";
import { CiChat1 } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

const HeaderImage = styled.img`
  width: 35px;
  border-radius: 100px;
  margin: 12px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: auto;

  #chats-history:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  #expand:hover {
    cursor: pointer;
    opacity: 0.6;
  }
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
            id="chats-history"
            style={{
              margin: "0 12px 0 0",
              fontSize: "xx-large",
            }}
          />
          <HeaderComponent />
          <MdExpandMore
            id="expand"
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
      <FooterComponent />
    </>
  );
}

export default App;
