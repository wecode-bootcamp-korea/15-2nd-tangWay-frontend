import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Spinner = () => {
  const [display, setDisplay] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(0);
    }, 2000);
  }, []);

  return (
    <Wrapper display={display}>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
      <Bar></Bar>
    </Wrapper>
  );
};

export default Spinner;

const scale = keyframes`
    0% {
        transform: none;
    }

    20% {
        transform: scale(2);
    }

    40% {
        transform: none;
    }
`;

const Wrapper = styled.div`
  position: fixed;
  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #1fac9c;
  z-index: 1000;
`;

const Bar = styled.div`
  width: 15px;
  height: 80px;
  background-color: whitesmoke;
  margin: 0 10px;
  animation: ${scale} 1.5s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
`;
