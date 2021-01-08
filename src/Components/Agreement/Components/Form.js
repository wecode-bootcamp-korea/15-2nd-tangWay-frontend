import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import theme from "../../../Styles/theme";
import { ICONSARR } from "../Data/AgreementData";

export default function Form(props) {
  const history = useHistory();
  return (
    <Layout id="SignUpPage">
      <TopItemsContainer>
        <div>
          <Title>약관 동의</Title>
        </div>
        <IconsList>
          {ICONSARR.map((el, idx) => {
            return (
              <Icons key={idx}>
                {el.icon} {el.text}
              </Icons>
            );
          })}
        </IconsList>
        <AgreeAll>약관 및 정보이용 안내에 동의해주시기 바랍니다.</AgreeAll>
      </TopItemsContainer>
      {props.children}
      <BottomContainer>
        <NextBtn onClick={() => history.push("/signup")}>다음</NextBtn>
      </BottomContainer>
    </Layout>
  );
}

const Layout = styled.div`
  ${theme.flexcenter};
  flex-direction: column;
  margin-top: 100px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;

const TopItemsContainer = styled.div`
  width: 1200px;
  border-bottom: 1px solid black;
`;

const IconsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 100px auto;
  list-style: none;
`;

const Icons = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;

  i.fas {
    padding: 10px;
    color: ${theme.mainColorRed};
    font-size: 30px;
  }
`;

const AgreeAll = styled.p`
  margin-top: 100px;
  margin-bottom: 20px;
  font-size: 16px;
  align-self: flex-start;
`;

const BottomContainer = styled.div`
  width: 1200px;
  margin-top: 50px;
  ${theme.flexcenter};
`;

const NextBtn = styled.button`
  width: 170px;
  height: 60px;
  color: #ffffff;
  font-size: 16px;
  background-color: ${theme.mainColorRed};
  border: none;
  border-radius: 5px;
`;
