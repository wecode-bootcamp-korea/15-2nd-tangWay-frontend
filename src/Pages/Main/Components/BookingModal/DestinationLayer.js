import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DestinationList from "./DestinationList";

function DestinationLayer({ data, setLayer, setOpenCalendar, activeID }) {
  const departure = useSelector((store) => store.bookingReducer.departure);

  return (
    <LayerWrap>
      <h3>취항지</h3>
      <div>
        {departure ? (
          <DestinationList data={data} setLayer={setLayer} setOpenCalendar={setOpenCalendar} activeID={activeID} />
        ) : (
          <DestinationList data={data} activeID={activeID} />
        )}
      </div>
    </LayerWrap>
  );
}

export default DestinationLayer;

const LayerWrap = styled.section`
  float: right;
  margin-right: 30px;
  width: 330px;
  height: 465px;
  overflow: auto;

  h3 {
    margin: 10px 0;
    font-size: 18px;
    font-weight: 700;
  }
`;
