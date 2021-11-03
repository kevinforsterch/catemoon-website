import React from "react"
import styled from "styled-components"
import { FaTelegram, FaTwitter } from "react-icons/fa"
import { BscscanIcon } from "assets/images"

import logo from "assets/images/logo.webp"

const Navbar = () => {
  return (
    <NavContainer id="navbar">
      <nav className="container">
        <img src={logo} alt="CateMoon Logo" loading="lazy" />
        <div>
          <a
            href="https://t.me/CateMoonCoin"
            target="_blank"
            rel="noreferrer"
            aria-label="telegram"
          >
            <FaTelegram />
          </a>
          <a
            href="https://twitter.com/CateMoonToken"
            target="_blank"
            rel="noreferrer"
            aria-label="twitter"
          >
            <FaTwitter />
          </a>
          {/* <a
            href="https://bscscan.com/token/0x4129ba36c11290114555958276fdcfc831f8058e"
            aria-label="bscscan"
          >
            <BscscanIcon />
          </a> */}
        </div>
      </nav>
    </NavContainer>
  )
}

const NavContainer = styled.header`
  background-color: white;
  padding: 1.5rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;

      & > a {
        font-size: 36px;
        color: #292255;

        &:not(:last-child) {
          margin-right: 24px;

          @media (max-width: 425px) {
            margin-right: 16px;
          }
        }

        & > svg {
          width: 36px;
          height: 36px;
        }
      }
    }
  }

  img {
    width: 150px;
  }
`

export default Navbar
