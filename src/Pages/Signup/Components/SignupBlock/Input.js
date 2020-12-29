import React from "react";

export default function Input({ className, type, name, placeholder, handleChange }) {
  return (
    <input className={className} type={type} name={name} placeholder={placeholder} onChange={(e) => handleChange(e)} />
  );
}
