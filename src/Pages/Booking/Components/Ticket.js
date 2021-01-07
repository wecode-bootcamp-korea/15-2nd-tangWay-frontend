import React from "react";
import styled from "styled-components";
import moment from "moment";

const Ticket = ({ itienrary, onTicketClick }) => {
  const diffTimes = (start, end) => {
    const HOUR = 60;
    const [s_h, s_m] = start.split(":");
    const [e_h, e_m] = end.split(":");

    const s = moment();
    const e = moment();

    s.hour(+s_h);
    s.minute(+s_m);
    e.hour(+e_h);
    e.minute(+e_m);

    const res = e.diff(s, "minute") / HOUR;
    const diffHour = Math.floor(res);
    const diffMinute = res - diffHour;

    return "0" + diffHour + "h" + " " + diffMinute * HOUR + "m";
  };

  return (
    <Wrapper
      onClick={() => {
        onTicketClick(itienrary);
      }}
    >
      <Info className={itienrary.on ? "on" : ""}>
        <Airport>{itienrary.airplane_name}</Airport>
        <InfoBox>
          <TimeAndPrice>{itienrary.depart_time}</TimeAndPrice>
          <Airport>{itienrary.depart_english_name}</Airport>
        </InfoBox>
        <InfoBox>
          <span>{diffTimes(itienrary.depart_time, itienrary.arrive_time)}</span>
          <img src="http://contents-image.twayair.com/homepage/images/booking/bg_service_exp.png" alt="bg_service" />
          <span>직항</span>
        </InfoBox>
        <InfoBox>
          <TimeAndPrice>{itienrary.arrive_time}</TimeAndPrice>
          <Airport>{itienrary.arrive_english_name}</Airport>
        </InfoBox>
      </Info>
      <Price className={itienrary.on ? "on" : ""}>
        <span>KRW</span>
        <TimeAndPrice>{itienrary.price.toLocaleString()}</TimeAndPrice>
      </Price>
    </Wrapper>
  );
};

export default Ticket;

const Wrapper = styled.ul`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  cursor: pointer;
`;

const Info = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  padding: 22px 40px 22px 40px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  border-right: 1px dashed #cccccc;

  &.on {
    ${(props) => props.theme.selected}
    border-right: 1px dashed #cccccc;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  img {
    position: relative;
    top: -8px;
  }
`;

const TimeAndPrice = styled.strong`
  font-size: 40px;
  font-weight: 700;
  color: #1a1a1a;
`;

const Airport = styled.span`
  font-size: 16px;
  color: #1a1a1a;
`;

const Price = styled.li`
  ${(props) => props.theme.flexcenter}
  width: 30%;
  padding: 25px 50px 25px 20px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  border-left: none;

  &.on {
    ${(props) => props.theme.selected}
    border-left: none;
  }

  span {
    position: relative;
    top: 8px;
    margin-right: 10px;
  }
`;
