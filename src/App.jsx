import React, { useState } from "react";
import styled from "styled-components";
import HeaderComponent from "./Components/Header/HeaderComponent";

function App() {
  return (
    <>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HeaderComponent />
      </header>
      <footer
        style={{
          position: "absolute",
          bottom: "6px",
          left: "37.5%",
          fontSize: "smaller",
          color: "gray"
        }}
      >
        Un-named Bot can make mistakes. Check important info.
      </footer>
    </>
  );
}

export default App;
