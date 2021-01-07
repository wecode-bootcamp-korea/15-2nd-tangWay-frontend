import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import styled from "styled-components";
import Booking from "../Booking";

function BookingHeader() {
  const history = useHistory();
  const gotoMain = () => {
    history.push("/");
  };

  return (
    <Header>
      <HeaderContainer>
        <HeaderLogo onClick={gotoMain}>
          <img src="./images/tang.png" alt="tomato" />
        </HeaderLogo>
        <BookingHeaderLists>
          <ul>
            {BookingHeaderList?.map((BookingHeaderList, index) => {
              return (
                <Li key={index}>
                  <i className={BookingHeaderList.icon}></i>
                  <Link>{BookingHeaderList.title} </Link>
                </Li>
              );
            })}
          </ul>
        </BookingHeaderLists>
      </HeaderContainer>
    </Header>
  );
}

export default BookingHeader;

const BookingHeaderList = [
  {
    id: 1,
    title: "한국",
  },
  {
    id: 2,
    title: "한국어",
  },
  {
    id: 3,
    icon: "far fa-user",
  },
  {
    id: 4,
    icon: "fas fa-search",
  },
  {
    id: 5,
    icon: "fas fa-bars",
  },
];

const Header = styled.header`
  border-bottom: 1px solid #e3e3e3;
`;

const HeaderContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;
const HeaderLogo = styled.div`
  cursor: pointer;
  img {
    width: 200px;
    height: 100px;
    object-fit: cover;
  }
`;

const BookingHeaderLists = styled.div`
  margin-top: 20px;
  display: flex;
  ul {
    display: flex;
  }
`;

const Li = styled.li`
  padding: 0 20px;
  i {
    font-size: 24px;
    color: #000;
  }
  &:nth-child(1),
  &:nth-child(2) {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 10px;
      right: -7px;
      width: 1px;
      height: 15px;
      background-color: #d8d8d8;
    }
    a {
      color: #000;
      position: relative;
      &:before {
        position: absolute;
        content: "";
        right: -13px;
        top: 10px;
        width: 8px;
        height: 5px;
        background: url("https://res.kurly.com/pc/ico/1908/ico_down_8x5.png") no-repeat 0 0;
      }
    }
  }
`;
