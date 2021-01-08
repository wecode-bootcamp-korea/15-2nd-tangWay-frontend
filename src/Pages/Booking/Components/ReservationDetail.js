import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import styled from "styled-components";

const ReservationDetail = ({ item, choose }) => {
  const bookingInfo = useSelector((store) => store.bookingReducer);

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
    <li>
      <Bar>
        <i className="fas fa-plane-departure"></i>
        <strong>{item.section}</strong>
      </Bar>
      <Detail>
        <Date>
          <span>
            {item.section === "구간1"
              ? bookingInfo.startDate?.format("YYYY-MM-DD")
              : bookingInfo.endDate?.format("YYYY-MM-DD")}
          </span>
        </Date>
        <Info>
          <Departure>
            <strong>{choose.ticket.depart_english_name}</strong>
            <span>{item.section === "구간1" ? bookingInfo.departure : bookingInfo.destination}</span>
          </Departure>
          <Exp>
            <div>
              <span>
                {choose.ticket.depart_time} ~ {choose.ticket.arrive_time} /{" "}
              </span>
              <span>{diffTimes(choose.ticket.depart_time, choose.ticket.arrive_time)}</span>
            </div>
            <img src="http://contents-image.twayair.com/homepage/images/booking/bg_service_exp.png" alt="bg_service" />
            <div>
              <span>{choose.ticket.airplane_name} |</span>
              <span> {choose.ticket.path_type}</span>
            </div>
          </Exp>
          <Arrival>
            <strong>{choose.ticket.arrive_english_name}</strong>
            <span>{item.section === "구간2" ? bookingInfo.departure : bookingInfo.destination}</span>
          </Arrival>
        </Info>
      </Detail>
    </li>
  );
};

export default ReservationDetail;

const Bar = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px 5px 0 0;
  background-color: #f5f5f5;

  i {
    color: #d32d29;
  }

  strong {
    margin: 12px;
    font-weight: 700;
  }
`;

const Detail = styled.section`
  position: relative;
  height: 125px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px auto;
  height: 100%;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  strong {
    font-size: 40px;
    font-weight: 700;
    color: #1a1a1a;
  }
  span {
    font-size: 16px;
    color: #1a1a1a;
  }
`;

const Exp = styled.div`
  width: 310px;
  font-size: 14px;
  text-align: center;
  img {
    width: 300px;
    margin-bottom: 12px;
  }
`;

const Date = styled.div`
  position: absolute;
  top: 42%;
  left: 8%;
`;

const Departure = styled(Div)``;

const Arrival = styled(Div)``;
