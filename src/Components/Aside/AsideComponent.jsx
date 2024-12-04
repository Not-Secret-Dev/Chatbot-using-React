import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.openSB ? "250px" : "0")};
  height: 100%;
  background-color: #222;
  overflow-x: hidden;
  transition: width 0.3s ease;
  z-index: 98; 
`;

const SidebarContent = styled.div`
  margin: 20px;
  color: white;
`;

function AsideComponent({ openSB }) {
  return (
    <Sidebar openSB={openSB}>
      {openSB && <SidebarContent>Sidebar Content</SidebarContent>}
    </Sidebar>
  );
}

export default AsideComponent;
