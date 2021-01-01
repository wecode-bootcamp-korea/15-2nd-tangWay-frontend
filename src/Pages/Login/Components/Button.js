import React from "react";

export default function Button({ name, text, imgSrc, login, socialLogin, socialButtonsArr }) {
  return (
    <button
      name={name}
      onClick={name === "loginBtn" ? () => login() : name === "kakaoBtn" ? () => socialLogin() : console.log("구현중")}
    >
      <div>
        {name !== "loginBtn" && <img alt="socialIcons" src={imgSrc} />}
        <p>{text}</p>
      </div>
    </button>
  );
}

export function ModalButton({ name, text }) {
  return <button name={name}>{text}</button>;
}
