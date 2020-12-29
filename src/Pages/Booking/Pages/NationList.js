import React from "react";
import styled from "styled-components";

function NationList({ nations, onChange, getNationInput, data }) {
  const getNation = (e) => {
    const { id } = e.currentTarget;
    const newData = {
      ...data,
      nation: id,
    };
    onChange(newData);
  };
  return (
    <SearchWrap>
      {nations.map((nation, index) => {
        return (
          <label id={nation.nation} onChange={getNation} className="radio">
            <input type="radio" name="nation" />
            {nation.nation}
            <span></span>
          </label>
        );
      })}
    </SearchWrap>
  );
}

export default NationList;

const SearchWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .radio {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    padding: 10px 30px;
    position: relative;
    cursor: pointer;
    input[type="radio"] {
      display: none;
    }
    span {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      border: 3px solid #00aeef;
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      &::after {
        content: "";
        height: 8px;
        width: 8px;
        background-color: #00aeef;
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 50%;
        transition: 300ms ease-in-out 0s;
      }
    }
    input[type="radio"]:checked ~ span::after {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
