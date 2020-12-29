import React from "react";
import Button from "./Button";
import BirthMenu from "./BirthMenu";

export default function ButtonBlock({ handleClick, makeBirthday, makeBigArr, maleClicked, femaleClicked }) {
  return (
    <ul className="ButtonBlock">
      <li>
        <label className="indicatorContainer">성별</label>
        <div className="inputBtnContainer">
          {Buttons.data.map((el, idx) => {
            return (
              <Button
                key={idx}
                text={el.text}
                handleClick={handleClick}
                name={el.name}
                maleClicked={maleClicked}
                femaleClicked={femaleClicked}
              />
            );
          })}
        </div>
      </li>
      <li>
        <label className="indicatorContainer">생년월일</label>
        <div className="inputBtnContainer">
          {Date.data.map((el, idx) => {
            return (
              <BirthMenu
                key={idx}
                start={el.start}
                end={el.end}
                unit={el.unit}
                makeBirthday={makeBirthday}
                makeBigArr={makeBigArr}
              />
            );
          })}
        </div>
      </li>
      <li>
        <label className="indicatorContainer">거주 지역</label>
        <div className="inputBtnContainer">
          <span>대한민국(Republic of Korea)</span>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            지역 검색
          </button>
        </div>
      </li>
    </ul>
  );
}

const Buttons = {
  data: [
    {
      text: "남성",
      name: "male",
      clicked: false,
    },
    {
      text: "여성",
      name: "female",
      clicked: false,
    },
  ],
};

const Date = {
  data: [
    {
      start: 1920,
      end: 2020,
      unit: "년",
    },
    {
      start: 1,
      end: 12,
      unit: "월",
    },
    {
      start: 1,
      end: 31,
      unit: "일",
    },
  ],
};
