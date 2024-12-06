import React from "react";
import styled from "styled-components";

const ChatContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 10px;
  height: 300px;
  overflow-y: scroll;
`;

const Message = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  background: transparent;
`;

const UserMessage = styled.div`
  align-self: flex-end;
  background-color: #333;
  padding: 10px;
  border-radius: 20px;
  color: white;
  max-width: 75%;
`;

const AIMessage = styled.div`
  align-self: flex-start;
  background-color: #444;
  padding: 10px;
  border-radius: 20px;
  color: white;
  max-width: 75%;
`;

const ChatComponent = ({ messages }) => {
  return (
    <ChatContainer>
      {messages.map((message, index) => (
        <Message key={index}>
          {message.role === "user" ? (
            <UserMessage>{message.text}</UserMessage>
          ) : (
            <AIMessage>{message.text}</AIMessage>
          )}
        </Message>
      ))}
    </ChatContainer>
  );
};

export default ChatComponent;
