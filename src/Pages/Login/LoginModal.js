import React from "react";
import styled from "styled-components";
import ModalContent from "./Components/ModalContent";

function LoginModal({ modalState, setModalState }) {
  return (
    <>
      <ModalOverlay modalState={modalState} />
      <ModalWrapper modalState={modalState}>
        <ModalContent setModalState={setModalState} modalState={modalState} />
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  width: 560px;
  position: fixed;
  top: 350px;
  left: 700px;
  z-index: 200;
  display: ${(props) => (props.modalState ? "block" : "none")};
  border: 1px solid black;
  background-color: #ffffff;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 199;
  display: ${(props) => (props.modalState ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.4);
`;

export default LoginModal;
