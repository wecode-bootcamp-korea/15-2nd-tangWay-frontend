import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/config/header.json")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  }, []);

  return (
    <HeaderWrap>
      <div className="headerInner">
        <LOGO alt="logo_image" src="./images/logo.png" />
        <CategoryWrap>
          {category.menu &&
            category.menu.map((menu, idx) => {
              return (
                <List key={idx} id={menu.id}>
                  <Link to={menu.src}>{menu.title}</Link>
                </List>
              );
            })}
        </CategoryWrap>
        <UtilWrap>
          <div>
            <Language>한국</Language>
            <Language>한국어</Language>
          </div>
          <div>
            <UtilImages src="https://www.flaticon.com/svg/static/icons/svg/929/929564.svg" alt="user" />
            <UtilImages src="https://www.flaticon.com/svg/static/icons/svg/54/54481.svg" alt="search" />
            <UtilImages src="https://www.flaticon.com/svg/static/icons/svg/633/633647.svg" alt="menu" />
          </div>
        </UtilWrap>
      </div>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 85px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: white;
    a {
      color: black;
    }
    div {
      span {
        color: black;
      }
      img {
        filter: invert(0);
      }
    }
  }

  .headerInner {
    ${({ theme }) => theme.flexSB}
    align-items: center;
    width: 1280px;
    height: 85px;
  }
`;
const LOGO = styled.img`
  width: 200px;
  height: 150px;
  margin-top: 20px;
  cursor: pointer;
`;
const CategoryWrap = styled.ul`
  ${({ theme }) => theme.flexSB}
  position: relative;
  width: 820px;
  right: 30px;
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
`;

const Language = styled.span`
  font-size: 14px;
  margin-right: 50px;
  color: white;
  cursor: pointer;
`;

const UtilImages = styled.img`
  width: 28px;
  height: 28px;
  margin: 10px 30px 0px 0px;
  cursor: pointer;
  filter: invert(100%);
`;
