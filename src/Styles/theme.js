import { css } from "styled-components";

const selected = css`
  border: 2px solid black;
  border-radius: 10px;
`;

const flexcenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexSB = css`
  display: flex;
  justify-content: space-between;
`;

const Color = {
  fontcolorwhite: "#ffffff",
  fontcolorblack: "#1b1b1b",
  fontcolorlightgray: "#f5f5f5",
  maincolorred: "#d22c26",
  backgroundgray: "#eaeaea",
  mainColorRed: "#d22c26",
  backGroundGray: "#eaeaea",
  fontColorWhite: "#ffffff",
};

const theme = {
  Color,
  flexcenter,
  flexSB,
  selected,
  mainColorRed: "#d22c26",
  backGroundGray: "#eaeaea",
  fontColorWhite: "#ffffff",
};

export default theme;
