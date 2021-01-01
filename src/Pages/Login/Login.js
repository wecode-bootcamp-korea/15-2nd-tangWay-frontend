import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import theme from "../../Styles/theme";
import { KakaoLoginApi, LoginApi } from "../../config";
import BoxForm from "./Components/BoxForm";
import CheckReservation from "./Components/CheckReservation";

const { Kakao } = window;

function Login() {
  const history = useHistory();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [checkClicked, setCheckClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    name === "idInput" ? setUserId(value) : setUserPw(value);
  };

  const socialLogin = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        alert("success");
        fetch(KakaoLoginApi, {
          method: "POST",
          headers: {
            authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.access_token) {
              localStorage.setItem("access_token", res.access_token);
              alert("로그인 성공!");
              history.push("/");
            } else {
              alert("추가 회원 정보가 필요합니다.");
              history.push("/signup");
            }
          });
      },
      fail: function (err) {
        console.log("err", err);
      },
    });
  };

  const login = () => {
    fetch(LoginApi, {
      method: "POST",
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("access_token", res.access_token);
          alert("로그인 성공!");
          history.push({
            pathname: "/",
          });
        } else {
          alert("아이디 혹은 비밀번호를 확인해 주세요");
        }
      });
  };

  const goToSignUpPage = (e) => {
    if (e.target.getAttribute("name") === "signup") {
      history.push({
        pathname: "/Signup",
      });
    }
    alert("moving to signup page");
  };

  return (
    <LoginBox>
      <Title>로그인</Title>
      <div className="loginTop">
        <span>회원 로그인</span>
      </div>
      <BoxForm
        handleChange={handleChange}
        goToSignUpPage={goToSignUpPage}
        checkClicked={checkClicked}
        setCheckClicked={setCheckClicked}
        userId={userId}
        userPw={userPw}
        login={login}
        socialLogin={socialLogin}
      />
      <CheckReservation />
    </LoginBox>
  );
}

export default Login;

const LoginBox = styled.div`
  margin: 100px auto;
  ${theme.flexcenter};
  align-self: center;
  width: 1200px;
  flex-direction: column;

  div.loginTop {
    width: 680px;
    height: 46px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 23px 0;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: ${theme.mainColorRed};
    border-top: 3px solid ${theme.mainColorRed};
    border-left: 1px solid ${theme.backGroundGray};
    border-right: 1px solid ${theme.backGroundGray};
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 100px;
  padding: 23px 0;
  font-size: 40px;
  font-weight: 600;
`;
