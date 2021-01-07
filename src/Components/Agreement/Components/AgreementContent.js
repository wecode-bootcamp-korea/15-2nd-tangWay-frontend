import React from "react";
import styled from "styled-components";
import theme from "../../../Styles/theme";
import { AgreementBoxData } from "../Data/AgreementData";
import ScrollBox from "./ScrollBox";
import CheckBox from "./CheckBox";

export default function AgreementContent({ handleCheckedList, checkedList, allChecked }) {
  return (
    <ContentBox>
      {AgreementBoxData.AgreeItems.map((el, idx) => {
        return (
          <AgreementPolicies>
            <div key={idx} className="agreements">
              <CheckBox
                key={idx}
                name={el.name}
                handleCheckedList={handleCheckedList}
                checkedList={checkedList}
                allChecked={allChecked}
              />
              {el.name !== "agreeAll" && <span className="required">{el.required}</span>}
              <p name={el.name}>{el.text}</p>
            </div>
            {el.name !== "agreeAll" && <ScrollBox name={el.name} content={el.content} />}
          </AgreementPolicies>
        );
      })}
    </ContentBox>
  );
}

const ContentBox = styled.div`
  width: 1200px;
  ${theme.flexcenter};
  flex-direction: column;

  p {
    width: 100%;
    align-self: flex-start;
    padding: 20px 10px;
    font-size: 16px;
  }
`;

const AgreementPolicies = styled.div`
  width: 1200px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  border-bottom: 1px solid ${theme.backGroundGray};

  .agreements {
    width: 100%;
    display: flex;

    input {
      margin-top: 19px;
      /* color: ${theme.backGroundGray};
       */
      color: red;
    }

    &:hover {
      cursor: pointer;
    }

    #clickedTangway {
      color: red;
    }

    .required {
      width: 43px;
      margin: 19px 0 0 10px;
      color: red;
    }
  }
`;
