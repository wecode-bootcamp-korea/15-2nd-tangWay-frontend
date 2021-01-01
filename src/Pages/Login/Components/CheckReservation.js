import React from "react";
import styled from "styled-components";
import theme from "../../../Styles/theme";

export default function CheckReservation() {
  return (
    <ResBox>
      <p>티웨이항공 사이트가 아닌 여행사/소셜커머스/예약센터/공항에서 예약한 내역을 조회하실 수 있습니다.</p>
      <button>예약조회</button>
    </ResBox>
  );
}

const ResBox = styled.div`
  width: 700px;
  height: 150px;
  ${theme.flexcenter};
  border: 1px solid ${theme.backGroundGray};
  p {
    margin: 30px;
    line-height: 28px;
  }
  button {
    width: 140px;
    height: 60px;
    margin: 30px;
    background-color: ${theme.mainColorRed};
    color: ${theme.fontColorWhite};
    font-size: 15px;
    border-radius: 5px;
  }
`;
