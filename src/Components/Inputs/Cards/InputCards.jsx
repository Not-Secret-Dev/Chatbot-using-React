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

const InputCards = () => {
  return (
    <Cards>
      <InputCard Icon={CiImageOn} TextContent="Create Image" />
      <InputCard Icon={CiGift} TextContent="Surprise Me" />
      <InputCard Icon={FaRegEye} TextContent="Analyze Images" />
      <InputCard Icon={LuPencilLine} TextContent="Help Me Write" />
    </Cards>
  );
};

export default InputCards;
