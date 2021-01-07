import React from "react";
import styled from "styled-components";

function Third({ setType }) {
  const clickHandler = (e) => {
    const type = e.target.name;
    setType(type);
  };

  return (
    <Wrap>
      <input type="checkbox" />

      <Button name="second" onClick={clickHandler}>
        이전 단계
      </Button>
    </Wrap>
  );
}

export default Third;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 150px;
  height: 100px;
  background-color: red;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
`;
