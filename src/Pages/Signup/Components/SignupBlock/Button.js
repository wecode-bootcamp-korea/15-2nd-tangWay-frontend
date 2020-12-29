import React from "react";

export default function Button({ text, checkEmailId, handleClick, name, maleClicked, femaleClicked }) {
  return (
    <button
      className={name === "male" ? (maleClicked ? "maleClicked" : "male") : femaleClicked ? "femaleClicked" : "female"}
      onClick={text === "중복 확인" ? checkEmailId : (e) => handleClick(e)}
      name={name}
    >
      {text}
    </button>
  );
}
