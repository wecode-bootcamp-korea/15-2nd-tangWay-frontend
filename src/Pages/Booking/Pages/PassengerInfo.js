import React, { useEffect, useState } from "react";
import PassengerInfoAccordion from "./PassengerInfoAccordion";
import PassengerInfoWarning from "./PassengerInfoWarning";
import moment from "moment";
import styled from "styled-components";

const CURRENT_DATE = moment().format("YYYYMMDD");

function PassengerInfo({ setType }) {
  const [passengerInputList, setPassengerInputList] = useState([]);
  const [active, setActive] = useState("김찬영");

  /* get 이용해서 data 받아오기 */
  const getPassengerList = () => {
    // API로부터 탑승객 데이터 받고
    // setPassengerInputList()
    const newData = dummyList.map((passenger) => {
      if (passenger.data_of_birth === "") {
        return { ...passenger, data_of_birth: passenger.data_of_birth + CURRENT_DATE };
      }
      return passenger;
    });

    setPassengerInputList(newData || []);
  };

  useEffect(() => {
    getPassengerList();
  }, []);

  const goToPayment = (e) => {
    const type = e.target.name;
    setType(type);
    // API 명세에 맞게 데이터 가공해서 보내는 로직
  };

  const handleChangePassengerInfo = (index, data) => {
    const newList = [...passengerInputList];
    newList[index] = data;
    setPassengerInputList(newList);
  };
  const goToBooking = (e) => {
    const type = e.target.name;
    setType(type);
  };

  return (
    <PassengerInfoInput>
      <div className="passengerTitle">
        <h2>탑승자 정보</h2>
        <p>신분증에 기재된 이름, 생년월일을 작성하세요.</p>
      </div>
      {passengerInputList.map((passenger, index) => (
        <PassengerInfoAccordion
          key={index}
          data={passenger}
          onChange={(data) => handleChangePassengerInfo(index, data)}
          active={active}
          title={passenger.title}
          setActive={setActive}
        />
      ))}

      <PassengerInfoButton>
        <Button name="first" onClick={goToBooking}>
          이전 단계
        </Button>
        <Button color={100} name="third" onClick={goToPayment}>
          다음 단계
        </Button>
      </PassengerInfoButton>
      {/* Get & Post   */}
      <PassengerInfoWarning />
    </PassengerInfoInput>
  );
}

export default PassengerInfo;

const dummyList = [
  {
    id: 1,
    title: "김찬영",
    name: "김찬영",
    english_name: "ChanYoung",
    email: "rhdlwmal1234@naver.com",
    phone_number: "01075283320",
    data_of_birth: "19940630",
    nation: "Korean",
    gender: "male",
  },
  {
    id: 2,
    title: "성인1",
    name: "",
    english_name: "",
    email: "",
    phone_number: "",
    data_of_birth: "",
    nation: "",
    gender: "",
  },
  {
    id: 3,
    title: "유아1",
    name: "",
    english_name: "",
    email: "",
    phone_number: "",
    data_of_birth: "",
    nation: "",
    gender: "",
  },
];

const PassengerInfoInput = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  .passengerTitle {
    border-bottom: 1px solid #dadada;
    padding-bottom: 15px;
    h2 {
      font-size: 41px;
      color: #1a1a1a;
      margin-bottom: 15px;
    }
  }
`;
const PassengerInfoButton = styled.div`
  text-align: center;
`;

const Button = styled.button`
  width: 170px;
  height: 60px;
  margin-right: 10px;
  border: 1px solid #dadada;
  font-size: 20px;
  color: ${(props) => (props.color === 100 ? "#fff" : "#000")};
  background-color: ${(props) => (props.color === 100 ? "#d22c26" : "#fff")};
`;
