import React, { useState } from "react";
import "./Signup.scss";

const ICONSARR = [
  {
    icon: <i className="fas fa-file-powerpoint" />,
    text: "약관동의",
  },
  {
    icon: <i className="fas fa-file-signature" />,
    text: "개인정보입력",
  },
  {
    icon: <i className="fas fa-user-check" />,
    text: "가입완료",
  },
];

const PWBOXES = ["비밀번호", "비밀번호 확인"];
const NAMEBOXES = [
  {
    boxName: "국문 성/이름",
    lastName: "국문 성을 입력하세요.",
    firstName: "국문 이름을 입력하세요.",
  },
  {
    boxName: "영문 성/이름",
    lastName: "영문 성을 입력하세요.",
    firstName: "영문 이름을 입력하세요.",
  },
];

function SignUp() {
  const makeBigArr = (startNum, endNumber, unit) => {
    const numArr = [];

    for (let i = startNum; i <= endNumber; i++) {
      numArr.push(i + unit);
    }
    return numArr;
  };

  return (
    <div id="SignUpPage">
      <div className="signUpTop">
        <div>
          <h2>개인정보입력</h2>
        </div>
        <ul className="signUpIconContainer">
          {ICONSARR.map((el, idx) => {
            return (
              <li key={idx}>
                {el.icon} {el.text}
              </li>
            );
          })}
        </ul>
        <p>회원님의 개인정보를 입력해주시기 바랍니다.</p>
      </div>
      <form className="signUpInfoContainer">
        <ul>
          <li>
            <label className="indicatorContainer">아이디</label>
            <div className="inputBtnContainer">
              <input
                className="userIdInput"
                type="text"
                name="userId"
                placeholder="6~20자리, 영대 소문자, 숫자 조합."
              />
              <button>중복 확인</button>
            </div>
          </li>
          {PWBOXES.map((el, idx) => {
            return (
              <li key={idx}>
                <label className="indicatorContainer">{el}</label>
                <div className="inputBtnContainer">
                  <input
                    type="password"
                    name={el}
                    placeholder="8~20자리, 영대소문자,숫자,특수기호 중 2가지 이상 조합."
                  />
                </div>
              </li>
            );
          })}
          {NAMEBOXES.map((el, idx) => {
            return (
              <li key={idx}>
                <label className="indicatorContainer">{el.boxName}</label>
                <div className="inputBtnContainer">
                  <input type="text" name="lastnamebox" placeholder={el.lastName} />
                  <input type="text" name="firstnamebox" placeholder={el.firstName} />
                </div>
              </li>
            );
          })}
          <li>
            <label className="indicatorContainer">성별</label>
            <div className="inputBtnContainer">
              <button className="male">남성</button>
              <button className="female">여성</button>
            </div>
          </li>
          <li>
            <label className="indicatorContainer">생년월일</label>
            <div className="inputBtnContainer">
              <select className="dateDropDown">
                {makeBigArr(1920, 2020, "년").map((el, idx) => {
                  return (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              <select className="dateDropDown">
                {makeBigArr(1, 12, "월").map((el, idx) => {
                  return (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              <select className="dateDropDown">
                {makeBigArr(1, 31, "일").map((el, idx) => {
                  return (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>
          </li>
          <li>
            <label className="indicatorContainer">이메일</label>
            <div className="inputBtnContainer">
              <input type="text" name="email" placeholder="이메일을 입력하세요." />
            </div>
          </li>
          <li>
            <label className="indicatorContainer">휴대전화</label>
            <div className="inputBtnContainer">
              <input type="number" name="phoneNumber" placeholder="전화번호를 입력하세요." />
            </div>
          </li>
          <li>
            <label className="indicatorContainer">거주 지역</label>
            <div className="inputBtnContainer">
              <span>대한민국(Republic of Korea)</span>
              <button>지역 검색</button>
            </div>
          </li>
        </ul>
      </form>
      <div className="nextBtnContainer">
        <button className="nextBtn">다음</button>
      </div>
    </div>
  );
}

export default SignUp;
