import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function SignupBlock({ handleChange, checkEmailId, userPw, checkPw }) {
  return (
    <>
      {blockData.data.map((el, idx) => {
        return (
          <li key={idx}>
            <label className="indicatorContainer">{el.label}</label>
            <div className="inputBtnContainer">
              <Input
                className={el.inputData.className}
                type={el.inputData.type}
                name={el.inputData.name}
                placeholder={el.inputData.placeholder}
                handleChange={handleChange}
                userPw={userPw}
              />
              {el.label === "아이디" && <Button text={el.buttonData.text} checkEmailId={checkEmailId} />}
              {el.label === "비밀번호" && (
                <span className={userPw.validation ? "pwRight" : "pwWrong"}>
                  8~20자리, 영대소문자,숫자,특수기호 모두 한개 이상 조합
                </span>
              )}
              {el.label === "비밀번호 확인" && (
                <span className={checkPw ? "pwRight" : "pwWrong"}>비밀번호가 다릅니다.</span>
              )}
            </div>
          </li>
        );
      })}
    </>
  );
}

const blockData = {
  data: [
    {
      label: "아이디",
      inputData: {
        className: "userIdInput",
        type: "text",
        name: "userId",
        placeholder: "이메일 형식의 아이디를 입력해 주세요",
      },
      buttonData: {
        text: "중복 확인",
      },
    },
    {
      label: "비밀번호",
      inputData: {
        type: "password",
        name: "userPw",
        placeholder: "8~20자리, 영대소문자, 특수기호 모두 한개 이상 조합.",
      },
    },
    {
      label: "비밀번호 확인",
      inputData: {
        type: "password",
        name: "checkPw",
        placeholder: "비밀번호 확인",
      },
    },
    {
      label: "국문 이름",
      inputData: {
        type: "text",
        name: "korName",
        placeholder: "국문 이름을 입력하세요",
      },
    },
    {
      label: "영문 이름",
      inputData: {
        type: "text",
        name: "engName",
        placeholder: "영문 이름을 입력하세요. (띄어쓰기 없음)",
      },
    },
    {
      label: "휴대전화",
      inputData: {
        type: "text",
        name: "userPhoneNum",
        placeholder: "-를 제외한 전화번호를 입력하세요. (ex: 01012345678)",
      },
    },
  ],
};
