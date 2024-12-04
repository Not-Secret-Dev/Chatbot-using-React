import React, { useState } from "react";
import styled from "styled-components";
import HeaderComponent from "./Components/Header/HeaderComponent";
import AsideComponent from "./Components/Aside/AsideComponent";

const SideOCBtn = styled.button`
  position: fixed;
  top: 20px;
  left: ${(props) =>
    props.openSB
      ? "270px"
      : "20px"};
  z-index: 100;
  width: 120px;
  height: 45px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: left 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

function App() {
  const [openSB, setOpenSB] = useState(false);

  const handleSideOCBtn = () => {
    setOpenSB((prevState) => !prevState);
  };

  return (
    <>
      <header style={{ display: "flex", alignItems: "center" }}>
        <div className="aside">
          <AsideComponent openSB={openSB} />
          <SideOCBtn onClick={handleSideOCBtn}>
            {openSB ? "Close Sidebar" : "Open Sidebar"}
          </SideOCBtn>
        </div>
        <HeaderComponent />
      </header>
    </>
  );
}

export default App;
