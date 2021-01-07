import styled from "styled-components";

function BookingAirLine({ type }) {
  return (
    <AirLineWrap>
      <AirLineTitle>
        <h2>항공권 예매</h2>
      </AirLineTitle>
      <StepBookingContainer>
        <ul>
          {stepBooking?.map((stepBooking, index) => {
            return (
              <StepBookingList type={type} key={index}>
                <i className={stepBooking.icon}></i>
                {type === stepBooking.type ? <span>{stepBooking.text}</span> : <span>{stepBooking.id}</span>}
              </StepBookingList>
            );
          })}
        </ul>
      </StepBookingContainer>
    </AirLineWrap>
  );
}

export default BookingAirLine;

const stepBooking = [
  {
    id: "01",
    icon: "far fa-calendar-check",
    text: "01여정검색",
    type: "first",
    name: true,
  },
  {
    id: "02",
    icon: "far fa-address-book",
    text: "02탑승자 정보 입력",
    type: "second",
    name: "on",
  },
  {
    id: "03",
    icon: "far fa-credit-card",
    text: "03결제",
    type: "third",
  },
];

const AirLineWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
`;

const StepBookingContainer = styled.div`
  width: 70%;
  ul {
    display: flex;
    justify-content: flex-end;
    margin-left: 20px;
    align-items: center;
  }
`;

const AirLineTitle = styled.div`
  h2 {
    font-size: 42px;
    font-weight: 700;
  }
`;

const StepBookingList = styled.li`
  width: 100px;
  height: 50px;
  margin-right: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    position: absolute;
    content: "";
    width: 50px;
    height: 2px;
    top: 30%;
    left: 75%;
    background-color: #dadada;
  }
  span {
    margin-top: 10px;
    display: block;
    width: 130px;
    font-size: 14px;
    text-align: center;
  }
  &:nth-child(1) {
    color: ${(props) => (props.type === "first" ? "red" : "#000")};
    &::after {
      background-color: ${(props) => (props.type === "first" ? "red" : "#dadada")};
    }
  }
  &:nth-child(2) {
    color: ${(props) => (props.type === "second" ? "red" : "#000")};

    &::after {
      background-color: ${(props) => (props.type === "second" ? "red" : "#dadada")};
    }
  }
  &:nth-child(3) {
    color: ${(props) => (props.type === "third" ? "red" : "#000")};

    &::after {
      display: none;
    }
  }
  i {
    font-size: 26px;
  }
`;
