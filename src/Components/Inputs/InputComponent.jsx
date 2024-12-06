import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa6";
import InputCards from "./Cards/InputCards";

const Heading = styled.div`
  text-align: center;

  h1 {
    font-size: 32px;
    font-family: "Inter", sans-serif;
    font-weight: medium;
  }

  p {
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: medium;
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px 0;
`;

const QueryBox = styled.input`
  width: 550px;
  min-height: 20px;
  max-height: fit-content;
  padding: 13px;
  padding-left: 23px;
  border-radius: 100px 0 0 100px;
  border: none;
  outline: none;
  background-color: #333;
`;

const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 0 100px 100px 0;
  outline: none;
  background-color: #333;
  font-size: larger;

  &:hover {
    cursor: pointer;
  }

  #send-btn {
    padding: 6px;
    border-radius: 100px;
  }

  #send-btn:hover {
    opacity: 0.7;
  }
`;

const InputComponent = () => {
  const [query, setQuery] = useState(""); 

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleCardClick = (text) => {
    setQuery((prevQuery) => prevQuery + (prevQuery ? " " : "") + text);
  };

  return (
    <>
      <Heading>
        <h1>Hi! I am un-named!</h1>
        <p>How can I help you today?</p>
      </Heading>
      <InputBox>
        <QueryBox
          placeholder="Enter message"
          value={query}
          onChange={handleInputChange} 
        />
        <SendButton>
          <FaArrowUp id="send-btn" />
        </SendButton>
      </InputBox>
      <InputCards onCardClick={handleCardClick} />
    </>
  );
};

export default InputComponent;
