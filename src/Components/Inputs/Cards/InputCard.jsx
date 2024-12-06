import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  font-size: 24px;
  margin-right: 10px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;

  #Icon {
    background: none;
    display: inline-block;
  }
`;

const Text = styled.div`
  background: none;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  color: white;
  border-radius: 100px;
  outline: 1px solid #343434;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 150px;
  margin: 10px;
  font-size: 12px;
  justify-content: center;
  background-color: transparent;
  transition: 0.2s all;

  &:hover {
    background-color: #343434;
    cursor: pointer;
  }

  &:hover ${IconWrapper}, &:hover ${Text} {
    background-color: transparent;
  }
`;

const InputCard = ({ Icon, TextContent, onClick }) => {
  return (
    <Card onClick={onClick}>
      <IconWrapper>
        <Icon id="Icon" />
      </IconWrapper>
      <Text>{TextContent}</Text>
    </Card>
  );
};

export default InputCard;
