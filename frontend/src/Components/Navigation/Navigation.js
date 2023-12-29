import React, { useState } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'


function Navigation({ active, setActive, onSignout }) {
    return (

        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Sriyans</h2>
                    <p>Student</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav" onClick={onSignout}>
                <li style={{ cursor: 'pointer' }}>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: #2a2e32;
    backdrop-filter: blur(.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 4px solid #fe413c;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: #efefef;
        }
        p{
            color: #efefef;
        }
    }

    .menu-items {
  flex: 1;
  display: flex;
  flex-direction: column;

  

  li {
    display: grid;
    grid-template-columns: 40px auto;
    align-items: center;
    margin: 0.6rem 0;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    color: #efefef;
    padding-left: 1rem;
    position: relative;

    i {
      color: #ff5733;
      font-size: 1.4rem;
      transition: all 0.4s ease-in-out;
    }

    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s ease-in-out;
  }
}


    .active{
        color: #FF5733 !important;
        i{
            color: #efefef !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #ffa500;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation