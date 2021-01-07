import React from "react";
import styled from "styled-components";
import theme from "../../../Styles/theme";
import Input from "./Input";
import Button from "./Button";
import { buttonData, inputData, spanData } from "../Data/Data";

export default function BoxForm({
  handleChange,
  goToSignUpPage,
  checkClicked,
  setCheckClicked,
  userId,
  userPw,
  login,
  socialLogin,
}) {
  return (
    <>
      <InputWrapper>
        {inputData.data.map((input, idx) => {
          return (
            <Input
              key={idx}
              name={input.name}
              placeholder={input.text}
              handleChange={handleChange}
              userId={userId}
              userPw={userPw}
            />
          );
        })}
      </InputWrapper>
      <SpanWrapper>
        {spanData.rememberIdPw.map((span, idx) => {
          return (
            <li key={idx}>
              <i
                className="far fa-check-square"
                id={span.name === "rememberId" ? (checkClicked ? "boxClicked" : span.name) : span.name}
                onClick={() => setCheckClicked(!checkClicked)}
              />
              <span name={span.name}>{span.text}</span>
            </li>
          );
        })}
      </SpanWrapper>
      <LoginButtonWrapper>
        {buttonData.loginButton.map((button, idx) => {
          return <Button key={idx} name={button.name} text={button.text} login={login} />;
        })}
      </LoginButtonWrapper>
      <SpanWrapper>
        {spanData.signUpIdPw.map((span, idx) => {
          return (
            <li key={idx} name={span.name} onClick={(e) => goToSignUpPage(e)}>
              {span.text}
            </li>
          );
        })}
      </SpanWrapper>
      <SocialWrapper>
        <h2>SNS 서비스 계정으로 로그인</h2>
        {buttonData.socialButtons.map((button, idx) => {
          return (
            <Button
              key={idx}
              name={button.name}
              text={button.text}
              imgSrc={button.icon}
              socialLogin={socialLogin}
              socialButtonArr={buttonData.socialButtons.map((button) => {
                return button.name;
              })}
            />
          );
        })}
        <ul>
          <li>항공권 예약 서비스를 이용하기 위해서는 로그인이 필요합니다.</li>
          <li>SNS 아이디로 보다 편리하게 로그인을 하실 수 있습니다.</li>
        </ul>
      </SocialWrapper>
    </>
  );
}

const InputWrapper = styled.div`
  input {
    width: 500px;
    height: 46px;
    margin-bottom: 8px;
    padding: 23px;
    border: 1px solid ${theme.backGroundGray};
  }
`;

const SpanWrapper = styled.ul`
  display: flex;
  margin: 20px;

  li {
    align-items: flex-start;
    padding: 15px;
    &:hover {
      cursor: pointer;
    }

    span {
      padding-left: 5px;
      color: gray;
    }

    i {
      &#boxClicked {
        color: ${theme.fontColorWhite};
        background-color: ${theme.mainColorRed};
      }
    }
  }
`;

const LoginButtonWrapper = styled.div`
  width: 500px;

  button {
    width: 100%;
    height: 46px;
    font-size: 18px;
    background-color: ${theme.mainColorRed};
    color: ${theme.fontColorWhite};
    border-radius: 5px;
  }
`;

const SocialWrapper = styled.div`
  width: 500px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid gray;

  h2 {
    font-size: 22px;
    padding: 40px 0;
  }

  button {
    width: 150px;
    height: 50px;
    margin: 8px;
    background-color: ${theme.fontColorWhite};
    border: 1px solid ${theme.backGroundGray};

    div {
      ${theme.flexcenter}

      img {
        width: 38px;
        margin: auto 10px;
      }

      p {
        font-size: 15px;
        font-weight: 400;
      }
    }
  }

  ul {
    margin: 40px 0;
    list-style: circle;

    li {
      padding: 5px;
    }
  }
`;
