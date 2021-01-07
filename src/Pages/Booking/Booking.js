import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BookingHeader from "./Components/BookingHeader";
import BookingAirLine from "./Components/BookingAirLine";
import PassengerInfo from "./Pages/PassengerInfo";
import Payment from "./Payment";
import styled from "styled-components";
import ChooseItienrary from "./ChooseItienrary";
import "moment/locale/ko";
import { API } from "../../config";

function Booking() {
  const [itienrary, setItienrary] = useState([]);
  const [serviceSection, setserviceSection] = useState({});
  const [choose, setChoose] = useState({
    first: "",
    second: "",
  });
  const [type, setType] = useState("first");
  const bookingInfo = useSelector((store) => store.bookingReducer);

  useEffect(() => {
    firstSection();
  }, []);

  const selectTicket = (ticket) => {
    const filterItem = itienrary.map((item) => {
      if (item.id === ticket.id) {
        return { ...item, on: !ticket.on };
      }
      return { ...item, on: false };
    });
    setItienrary(filterItem);

    if (choose.first) {
      setChoose({ ...choose, second: { ticket } });
    } else {
      setChoose({ ...choose, first: { ticket } });
    }
  };

  const firstSection = () => {
    fetch(
      `${API}/flight/Section1?airport_depart=${bookingInfo.departure_id}&airport_arrive=${
        bookingInfo.destination_id
      }&arrive_date=${bookingInfo.endDate?.format("YYYY-MM-DD")}&depart_date=${bookingInfo.startDate?.format(
        "YYYY-MM-DD",
      )}&child=${bookingInfo.numOfInfant}&adult=${bookingInfo.numOfAdult}`,
    )
      .then((res) => res.json())
      .then((res) => {
        const section = res.section1_data;
        const addOn = section[0].data.map((item) => {
          return { ...item, on: false };
        });

        setserviceSection({
          depart_airport_english_name: section[0].depart_english_name,
          arrive_airport_english_name: section[0].arrive_english_name,
          depart_airport_kor_name: section[0].airport_korean_depart,
          arrive_airport_kor_name: section[0].airport_korean_arrive,
          start: "구간1",
        });
        setItienrary(addOn);
      });
  };

  const secondSection = () => {
    fetch(
      `${API}/flight/Section2?airport_depart=${bookingInfo.destination_id}&airport_arrive=${
        bookingInfo.departure_id
      }&arrive_date=${bookingInfo.endDate?.format("YYYY-MM-DD")}&depart_date=${bookingInfo.startDate?.format(
        "YYYY-MM-DD",
      )}&child=${bookingInfo.numOfInfant}&adult=${bookingInfo.numOfAdult}`,
    )
      .then((res) => res.json())
      .then((res) => {
        const section = res.section2_data;
        const addOn = section[0].data.map((item) => {
          return { ...item, on: false };
        });

        setserviceSection({
          depart_airport_english_name: section[0].depart_english_name,
          arrive_airport_english_name: section[0].arrive_english_name,
          depart_airport_kor_name: section[0].airport_korean_depart,
          arrive_airport_kor_name: section[0].airport_korean_arrive,
          start: "구간2",
        });
        setItienrary(addOn);
      });
  };

  const changeSection = () => {
    serviceSection.start === "구간1" ? secondSection() : firstSection();
  };

  return (
    <BookingContent>
      <BookingHeader />
      <BookingAirLine type={type} />
      {type === "first" && (
        <ChooseItienrary
          key={itienrary.id}
          itienrary={itienrary}
          onTicketClick={selectTicket}
          onChangeSection={changeSection}
          serviceSection={serviceSection}
          setType={setType}
        />
      )}
      {type === "second" && <PassengerInfo setType={setType} />}
      {type === "third" && <Payment setType={setType} choose={choose} />}
    </BookingContent>
  );
}

export default Booking;

const BookingContent = styled.div`
  display: flex;
  flex-direction: column;
`;
