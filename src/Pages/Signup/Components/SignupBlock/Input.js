import React from "react";
import { useSelector } from "react-redux";

export default function Input({ className, type, name, placeholder, handleChange }) {
  const kakaoData = useSelector((store) => store.signupReducer);
  const kakaoUserName = kakaoData.EMAIL;
  const kakaoName = kakaoData.NAME;
  const kakaoMessage = kakaoData.MESSAGE;

  return (
    <input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={kakaoMessage ? (name === "userId" ? kakaoUserName : name === "korName" ? kakaoName : null) : null}
      onChange={(e) => handleChange(e)}
    />
  );
}
