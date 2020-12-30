import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import RouteInput from "./RouteInput";
import TypeOneway from "./TypeOneway";
import TypeRoundTrip from "./TypeRoundTrip";
import LocationLayer from "./LocationLayer";
import Calendar from "../Calendar";
import Passenger from "./PassengerNum";
import { setDeparture, setDestination, setStartDate, setEndDate } from "../../../../store/actions";

function BookingModal({
  data,
  modal,
  setModal,
  layer,
  setLayer,
  type,
  setType,
  focusedInput,
  setFocusedInput,
  openCalendar,
  setOpenCalendar,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const departure = useSelector((store) => store.bookingReducer.departure);
  const destination = useSelector((store) => store.bookingReducer.destination);

  const calendarReset = () => {
    dispatch(setStartDate(null));
    dispatch(setEndDate(null));
  };

  const goToBooking = () => {
    history.push("/Booking");
  };

  return (
    <MainBooking modal={modal} type={type}>
      <div>
        <SelectTypeWrap>
          <button
            className={type === "oneWay" && "selectedButton"}
            onClick={() => {
              setModal(true);
              setType("oneWay");
            }}
          >
            편도
          </button>
          <button
            className={type === "roundTrip" && "selectedButton"}
            onClick={() => {
              setModal(true);
              setType("roundTrip");
            }}
          >
            왕복
          </button>
          {modal && (
            <ModalClose
              onClick={() => {
                setModal(false);
                setLayer(false);
                dispatch(setDeparture(""));
                dispatch(setDestination(""));
                setOpenCalendar(false);
                calendarReset();
              }}
            />
          )}
        </SelectTypeWrap>
        <BookingWrap>
          <div className="selectLocation">
            <SelectRoute
              departure={departure}
              destination={destination}
              onClick={() => {
                setModal(true);
              }}
            >
              <RouteInput
                name={departure}
                setLayer={setLayer}
                setOpenCalendar={setOpenCalendar}
                calendarReset={calendarReset}
              />
              <LocationLayer data={data} layer={layer} setLayer={setLayer} setOpenCalendar={setOpenCalendar} />
            </SelectRoute>
            <SelectRoute>
              <RouteInput />
            </SelectRoute>
          </div>
          <div className="date">
            {type === "oneWay" ? (
              <TypeOneway openCalendar={openCalendar} />
            ) : (
              <TypeRoundTrip openCalendar={openCalendar} />
            )}
            <a href="#none" />
            <Calendar
              calendarReset={calendarReset}
              focusedInput={focusedInput}
              setFocusedInput={setFocusedInput}
              openCalendar={openCalendar}
              setOpenCalendar={setOpenCalendar}
            />
          </div>
          <Passenger />
        </BookingWrap>
      </div>
      <ButtonWrap>
        <button onClick={goToBooking}>예매하기</button>
      </ButtonWrap>
    </MainBooking>
  );
}

export default BookingModal;

const MainBooking = styled.div`
  position: absolute;
  top: ${(props) => (props.modal ? "90px" : "580px")};
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1200px;
  z-index: 100;
  transition: all 0.6s;
`;

const SelectTypeWrap = styled.div`
  display: flex;
  width: 120px;
  border-radius: 15px;

  button {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.5);
    width: 60px;
    height: 32px;
    font-size: 14px;
    color: white;
    outline: none;
    text-align: center;
    line-height: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .selectedButton {
    font-size: 14px;
    font-weight: 800;
    color: white;
    border-color: #579015;
    background-color: #579015;
  }
`;

const ModalClose = styled.img.attrs(() => ({
  src: "./images/cancel.png",
  alt: "cancel",
}))`
  position: absolute;
  right: 0;
  width: 27px;
  height: 27px;
  filter: invert(100%);
  cursor: pointer;
`;

const BookingWrap = styled.div`
  display: flex;
  margin: 10px auto 0;
  padding: 25px 40px 0px;
  width: 1200px;
  height: 110px;
  border-radius: 15px;
  background-color: white;
  background: url("//contents-image.twayair.com/homepage/images/main/bg_main_booking.png") no-repeat 0 0;

  .selectLocation {
    display: flex;
  }
  .date {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 250px;
    height: 47px;
    margin-top: 15px;
    border-bottom: 1px solid #b3b3b3;
    text-align: center;

    span {
      margin: 0 5px;
    }
    a {
      display: inline-block;
      position: absolute;
      bottom: 7px;
      right: 0;
      width: 26px;
      height: 26px;
      background-image: url(./images/date.png);
      background-repeat: no-repeat;
      background-size: 22px;
    }
  }
`;

const SelectRoute = styled.div`
  margin-top: 10px;

  input {
    width: 240px;
    padding: 20px 35px 10px;
    margin-left: 15px;
    border-bottom: 1px solid #b3b3b3;
    font-size: 18px;
    outline: none;
    background-image: url(./images/flight.png);
    background-repeat: no-repeat;
    background-size: 25px;
    background-position-y: 17px;
  }

  img {
    position: relative;
    right: 20px;
    bottom: -7px;
    width: 20px;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 20px;
  text-align: right;

  button {
    width: 170px;
    height: 50px;
    padding: 10px 40px;
    border: 1px solid ${({ theme }) => theme.Color.maincolorred};
    border-radius: 5px;
    font-size: 20px;
    text-align: center;
    line-height: 1.1;
    color: white;
    background-color: ${({ theme }) => theme.Color.maincolorred};
    outline: none;
  }
`;
