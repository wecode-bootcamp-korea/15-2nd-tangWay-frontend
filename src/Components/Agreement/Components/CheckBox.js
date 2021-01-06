import React from "react";

export default function CheckBox({ name, handleCheckedList, checkedList, allChecked }) {
  return (
    <input
      type="checkbox"
      name={name}
      checked={name === "agreeAll" ? allChecked : checkedList[name]}
      onChange={(e) => handleCheckedList(e)}
    />
  );
}
