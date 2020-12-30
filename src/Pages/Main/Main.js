import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import BookingModal from "./Components/BookingModal/BookingModal";
import Service from "./Components/Service";
import Recommend from "./Components/Recommend/Recommend";
import Notice from "./Components/Notice";
import Footer from "../../Components/Footer/Footer";
import styled from "styled-components";
import { API } from "../../config";

function Main() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [layer, setLayer] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [type, setType] = useState("oneWay");
  const [listMode, setListMode] = useState("Slide");
  const [focusedInput, setFocusedInput] = useState("startDate");

  useEffect(() => {
    fetch(`${API}/flight/country`)
      .then((res) => res.json())
      .then((res) => setData(res.countrys));
  }, []);

  useEffect(() => {
    listMode === "Slide" ? setListMode("Slide") : setListMode("List");
  }, [listMode]);

  return (
    <>
      {modal && <OpenModal />}
      <MainSection>
        <Header />
        <BookingModal
          data={data}
          modal={modal}
          setModal={setModal}
          layer={layer}
          setLayer={setLayer}
          type={type}
          setType={setType}
          focusedInput={focusedInput}
          setFocusedInput={setFocusedInput}
          openCalendar={openCalendar}
          setOpenCalendar={setOpenCalendar}
        />
      </MainSection>
      <Service />
      <Recommend listMode={listMode} setListMode={setListMode} />
      <Notice />
      <Footer />
    </>
  );
}

export default Main;

const MainSection = styled.section`
  width: 100%;
  height: 830px;
  background-image: url(https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80);
  background-repeat: no-repeat;
  background-position: 50% 0;
`;

const OpenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 30;
  transition: all 0.6s;
  background-color: rgba(0, 0, 0, 0.5);
`;
