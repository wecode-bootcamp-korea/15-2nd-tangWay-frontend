import React, { useState } from "react";
import BookingHeader from "./Components/BookingHeader";
import BookingAirLine from "./Components/BookingAirLine";
import PassengerInfo from "./Pages/PassengerInfo";
import Frist from "./Pages/Frist";
import Third from "./Pages/Third";
import styled from "styled-components";

function Booking() {
  const [type, setType] = useState("first");

  return (
    <BookingContent>
      <BookingHeader />
      <BookingAirLine type={type} />
      {type === "first" && <Frist setType={setType} />}
      {type === "second" && <PassengerInfo setType={setType} />}
      {type === "third" && <Third setType={setType} />}
    </BookingContent>
  );
}

export default Booking;

const BookingContent = styled.div`
  display: flex;
  flex-direction: column;
`;
