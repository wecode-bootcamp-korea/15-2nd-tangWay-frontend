import React from "react";

export default function BirthMenu({ start, end, unit, makeBirthday, makeBigArr }) {
  return (
    <select className="dateDropDown" onChange={(e) => makeBirthday(e)}>
      {makeBigArr(start, end, unit).map((el, idx) => {
        return (
          <option key={idx} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
}
