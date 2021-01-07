import React from "react";
import styled from "styled-components";

const PAYMENT_METHOD = [
  {
    id: 1,
    title: "국내신용카드",
    img: "https://contents-image.twayair.com/homepage/images/payment_icon/CCES.png",
    alt: "Domestic-Credit-Card_icon",
  },
  {
    id: 2,
    title: "해외신용카드",
    img: "https://contents-image.twayair.com/homepage/images/payment_icon/CCEB.png",
    alt: "Overseas-Credit-Card_icon",
  },
  {
    id: 3,
    title: "무통장 입금",
    img: "https://contents-image.twayair.com/homepage/images/payment_icon/DBKR.png",
    alt: "Deposit-Without-bankbook_icon",
  },
  {
    id: 4,
    title: "실시간계좌이체",
    img: "https://contents-image.twayair.com/homepage/images/payment_icon/ETAT.png",
    alt: "Real-time-bank-transfer_icon",
  },
  {
    id: 5,
    title: "티웨이페이",
    img: "https://contents-image.twayair.com/homepage/images/payment_icon/EPTW.png",
    alt: "T'way-pay",
  },
];

const PaymentMethod = () => (
  <Wrapper>
    <Payments>
      {PAYMENT_METHOD.map((item) => {
        return (
          <PaymentBox>
            <Payment>
              <section>
                <img alt={item.alt} src={item.img} />
              </section>
              <span>{item.title}</span>
            </Payment>
          </PaymentBox>
        );
      })}
    </Payments>
  </Wrapper>
);

export default PaymentMethod;

const Wrapper = styled.div`
  padding: 40px 40px 30px 40px;
  border: 1px solid #ccc;
`;

const Payments = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const PaymentBox = styled.li`
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 213px;
  height: 115px;
  font-size: 16px;
  color: #1a1a1a;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-top: 10px;
  cursor: pointer;
  span {
    margin: 10px 0;
  }
`;
