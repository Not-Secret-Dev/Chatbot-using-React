import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  position: absolute;
  bottom: 6px;
  left: 37.5%;
  font-size: smaller;
  color: gray;
`;

const FooterComponent = () => {
  return <Footer>Un-named Bot can make mistakes. Check important info.</Footer>;
};

export default FooterComponent;
