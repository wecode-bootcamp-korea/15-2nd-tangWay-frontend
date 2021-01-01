import React from "react";

export default function Input({ name, placeholder, handleChange, userId, userPw }) {
  return (
    <div>
      <input
        type={name === "pwInput" ? "password" : "text"}
        name={name}
        placeholder={placeholder}
        value={name === "idInput" ? userId : userPw}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
