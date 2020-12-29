import React from "react";

export default function SignupLayout(props) {
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
      {props.children}
      <div className="nextBtnContainer">
        <button className="nextBtn" onClick={props.sendUserData}>
          다음
        </button>
        {/* <button className="nextBtn">다음</button> */}
      </div>
    </div>
  );
}

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
