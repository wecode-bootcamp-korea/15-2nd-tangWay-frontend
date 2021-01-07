import React from "react";
import styled from "styled-components";
import theme from "../../../Styles/theme";

export default function ScrollBox({ name, content }) {
  return <Container>{content}</Container>;
}

const Container = styled.div`
  width: 1140px;
  height: 207px;
  padding: ${(props) => (props.name === "agreeAll" ? "0" : "20px")};
  border: ${(props) => (props.name === "agreeAll" ? "none" : `1px solid ${theme.backGroundGray}`)};
  line-height: ${(props) => (props.name === "agreeAll" ? "0" : "30px")};

  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.backGroundGray};
    border-radius: 6px;
  }
`;
