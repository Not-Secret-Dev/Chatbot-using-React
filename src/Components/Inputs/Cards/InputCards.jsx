import React from "react";
import InputCard from "./InputCard";
import { CiImageOn } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  justify-content: center;
`;

const InputCards = ({ onCardClick }) => {
  const cards = [
    { icon: CiImageOn, text: "Create Image" },
    { icon: CiGift, text: "Surprise Me" },
    { icon: FaRegEye, text: "Analyze Images" },
    { icon: LuPencilLine, text: "Help Me Write" },
  ];

  return (
    <Cards>
      {cards.map((card, index) => (
        <InputCard
          key={index}
          Icon={card.icon}
          TextContent={card.text}
          onClick={() => onCardClick(card.text)} 
        />
      ))}
    </Cards>
  );
};

export default InputCards;
