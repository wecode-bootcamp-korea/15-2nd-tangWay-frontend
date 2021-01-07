import React from "react";
import BookingBtn from "./Components/BookingBtn";
import ServiceSection from "./Components/ServiceSection";
import Ticket from "./Components/Ticket";

const ChooseItienrary = ({ itienrary, onTicketClick, serviceSection, onChangeSection, setType }) => (
  <>
    <ServiceSection serviceSection={serviceSection} onChangeSection={onChangeSection} />
    {itienrary.map((item) => (
      <Ticket key={item.id} itienrary={item} onTicketClick={onTicketClick} />
    ))}
    <BookingBtn setType={setType} />
  </>
);

export default ChooseItienrary;
