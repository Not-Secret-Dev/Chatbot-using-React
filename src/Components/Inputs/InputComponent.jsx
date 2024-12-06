import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa6";
import InputCards from "./Cards/InputCards";
import { getAIResponse } from "../Chats/AiResponse";
import ChatComponent from "../Chats/ChatsComponent/ChatComponent";

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

const InputBoxContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px 0;
  z-index: 100;
`;

const QueryBox = styled.input`
  width: 450px;
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
  const [query, setQuery] = useState(""); // user input state
  const [chatMessages, setChatMessages] = useState([]); // Array to store chat messages
  const [showChat, setShowChat] = useState(false); // To control whether the chat is visible

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle click on cards (if you want predefined texts to be added to the input)
  const handleCardClick = (text) => {
    setQuery((prevQuery) => prevQuery + (prevQuery ? " " : "") + text);
  };

  // Handle the form submission and fetch the AI response
  const handleSubmit = async () => {
    if (query.trim()) {
      const newUserMessage = {
        role: "user",
        text: query,
      };
      setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);

      const response = await getAIResponse(query);

      const newAIResponse = {
        role: "ai",
        text: response,
      };
      setChatMessages((prevMessages) => [...prevMessages, newAIResponse]);
      setQuery(""); // Clear input after sending

      // Show the chat after the first message
      if (!showChat) {
        setShowChat(true);
      }
    }
  };

  return (
    <>
      <Heading>
        <h1>Hi! I am un-named!</h1>
        <p>How can I help you today?</p>
      </Heading>

      {/* Chat component which is hidden initially */}
      {showChat && <ChatComponent messages={chatMessages} />}

      {/* Input box and Send button */}
      <InputBoxContainer>
        <QueryBox
          placeholder="Enter message"
          value={query}
          onChange={handleInputChange}
        />
        <SendButton onClick={handleSubmit}>
          <FaArrowUp id="send-btn" />
        </SendButton>
      </InputBoxContainer>

      {/* Suggestion cards - hide when chat is shown */}
      {!showChat && <InputCards onCardClick={handleCardClick} />}
    </>
  );
};

export default InputComponent;
