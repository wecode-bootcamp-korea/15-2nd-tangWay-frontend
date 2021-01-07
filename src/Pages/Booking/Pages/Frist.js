import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Frist({ setType }) {
  const clickHandler = (e) => {
    const type = e.target.name;
    setType(type);
  };

  return (
    <Wrap>
      <Button name="second" onClick={clickHandler}>
        Next
      </Button>
    </Wrap>
  );
}

export default Frist;

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
