import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrap>
      <div className="headerInner">
        <img src="./images/logo.png" alt="logo" />
        <div>
          <ul>
            {Menu?.map((el, idx) => (
              <List key={idx} id={el.id}>
                <Link to={el.src}>{el.title}</Link>
              </List>
            ))}
          </ul>
        </div>
        <UtilWrap>
          <div className="selectLang">
            <span>한국</span>
            <span>한국어</span>
          </div>
          <div className="utilMenu">
            <img src="https://www.flaticon.com/svg/static/icons/svg/929/929564.svg" alt="user" />
            <img src="https://www.flaticon.com/svg/static/icons/svg/54/54481.svg" alt="search" />
            <img src="https://www.flaticon.com/svg/static/icons/svg/633/633647.svg" alt="menu" />
          </div>
        </UtilWrap>
      </div>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.section`
  background-color: green;

  .headerInner {
    ${({ theme }) => theme.flexSB}
    align-items: center;
    width: 1280px;
    height: 85px;
    margin: 0 auto;

    img {
      width: 200px;
      height: 150px;
      margin-top: 20px;
      cursor: pointer;
    }

    div {
      ul {
        ${({ theme }) => theme.flexSB}
        position: relative;
        width: 820px;
        right: 30px;
      }
    }
  }
`;

const List = styled.li`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  a {
    color: white;
  }
`;

const UtilWrap = styled.div`
  display: flex;
  flex-direction: column;

  .selectLang {
    span {
      font-size: 14px;
      margin-right: 50px;
      color: white;
      cursor: pointer;
    }
  }

  .utilMenu {
    img {
      width: 28px;
      height: 28px;
      margin: 10px 30px 0px 0px;
      cursor: pointer;
      filter: invert(100%);
    }
  }
`;

const Menu = [
  {
    id: 1,
    title: "항공권 예매",
    src: "/Booking",
  },
  {
    id: 2,
    title: "나의 예약",
    src: "/#",
  },
  {
    id: 3,
    title: "서비스 안내",
    src: "/#",
  },
  {
    id: 4,
    title: "좌석 선택",
    src: "/#",
  },
  {
    id: 5,
    title: "이벤트",
    src: "/#",
  },
  {
    id: 6,
    title: "고객센터",
    src: "/#",
  },
];
