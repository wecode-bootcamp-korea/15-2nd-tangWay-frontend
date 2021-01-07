import React from "react";
import styled from "styled-components";

function TypeOneway({ openCalendar }) {
  return <DateInput onClick={openCalendar} />;
}

export default TypeOneway;

const DateInput = styled.input.attrs(() => ({
  type: "text",
  placeholder: "탑승일",
}))`
  width: 250px;
  height: 46px;
  font-size: 15px;
`;
