import React, { useState, useEffect } from "react";
import styled from "styled-components";

function PassengerInfoWarning() {
  const [mode, setMode] = useState(false);
  const [warningTextList, setWarningTextList] = useState([]);

  const modeChange = () => {
    setMode(!mode);
  };

  useEffect(() => {
    fetch("http://localhost:3000/config/passengerInfoWarning.json")
      .then((res) => res.json())
      .then((res) => setWarningTextList(res.warning));
  }, []);

  return (
    <Warning>
      <Header>
        <h3>알아두세요</h3>
        <span onClick={modeChange}>
          {mode ? (
            <img
              className="open"
              src="http://contents-image.twayair.com/homepage/images/common/ico_arrow_red.png"
              alt="arrow"
            ></img>
          ) : (
            <img src="http://contents-image.twayair.com/homepage/images/common/ico_arrow_red.png" alt="arrow"></img>
          )}
        </span>
      </Header>
      {mode ? (
        <WarningDesc>
          <ul>
            {warningTextList?.map((warningTextList, index) => {
              return <li key={index}>{warningTextList.text}</li>;
            })}
          </ul>
        </WarningDesc>
      ) : null}
    </Warning>
  );
}

export default PassengerInfoWarning;

const Warning = styled.div`
  margin: 30px 0 50px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #dadada;
  height: 82px;
  h3 {
    padding-left: 40px;
  }
  span {
    margin-right: 40px;
    cursor: pointer;
  }
  img.open {
    transform: rotate(180deg);
  }
`;
const WarningDesc = styled.div`
  ul {
    border: 1px solid #dadada;
    height: 353px;
    li {
      margin-top: 20px;
      padding: 5px 30px 0px 40px;
    }
  }
`;
