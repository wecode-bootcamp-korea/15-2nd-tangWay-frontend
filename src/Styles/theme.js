import { css } from "styled-components";

const flexcenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexSB = css`
  display: flex;
  justify-content: space-between;
`;

const theme = {
  fontColorWhite: "#ffffff",
  fontColorBlack: "#1b1b1b",
  fontColorLightgray: "#f5f5f5",
  mainColorRed: "#d22c26",
  backGroundGray: "#eaeaea",
  flexcenter,
  flexSB,
};

export default theme;
