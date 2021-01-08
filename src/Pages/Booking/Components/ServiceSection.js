import React from "react";
import styled from "styled-components";

const ServiceSection = ({ serviceSection, onChangeSection }) => {
  return (
    <Wrapper>
      <Panel>{serviceSection.start}</Panel>
      <LeftButton onClick={() => onChangeSection()}>
        <i className="fas fa-chevron-left"></i>
      </LeftButton>
      <Section>
        <InfoBox>
          <AlphaCode>{serviceSection.depart_airport_english_name}</AlphaCode>
          <AirportKor>{serviceSection.depart_airport_kor_name}</AirportKor>
        </InfoBox>
        <InfoBox>
          <img src="http://contents-image.twayair.com/homepage/images/booking/bg_service_exp.png" alt="bg_service" />
        </InfoBox>
        <InfoBox>
          <AlphaCode>{serviceSection.arrive_airport_english_name}</AlphaCode>
          <AirportKor>{serviceSection.arrive_airport_kor_name}</AirportKor>
        </InfoBox>
      </Section>
      <RightButton onClick={() => onChangeSection()}>
        <i className="fas fa-chevron-right"></i>
      </RightButton>
    </Wrapper>
  );
};

export default ServiceSection;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 120px;
  margin: 0 auto;
  margin-top: 46px;
  margin-bottom: 10px;
  border: 2px solid #cccccc;
  border-radius: 10px;
  padding: 0;
`;

const Panel = styled.div`
  position: absolute;
  left: 23%;
  padding: 0 10px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 32px;
  background-color: #d22c26;
  border-radius: 3px;
`;

const Button = styled.button`
  position: relative;
  height: 100%;
  width: 48px;
  font-size: 20px;
  text-align: center;
  line-height: 1.1;
  border: none;
  cursor: pointer;
`;

const LeftButton = styled(Button)`
  border-radius: 10px 0 0 10px;
`;

const RightButton = styled(Button)`
  border-radius: 0 10px 10px 0;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  img {
    position: relative;
    top: 16px;
  }
`;

const AlphaCode = styled.strong`
  font-size: 40px;
  font-weight: 700;
  color: #1a1a1a;
`;

const AirportKor = styled.span`
  font-size: 16px;
  color: #1a1a1a;
`;
