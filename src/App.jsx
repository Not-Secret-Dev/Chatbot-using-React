import React, { useState } from "react";
import styled from "styled-components";
import HeaderComponent from "./Components/Header/HeaderComponent";

function App() {
  return (
    <>
      <header style={{ display: "flex", alignItems: "center" }}>
        <HeaderComponent />
      </header>
    </>
  );
}

export default App;
