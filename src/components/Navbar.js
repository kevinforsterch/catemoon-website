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
          <a href="https://t.me/CateMoonCoin" aria-label="telegram">
            <FaTelegram />
          </a>
          <a href="https://twitter.com/CateMoonToken" aria-label="twitter">
            <FaTwitter />
          </a>
          <a
            href="https://bscscan.com/token/0x6244feff0ddba579346ca028adf2080d9a6511a3"
            aria-label="bscscan"
          >
            <BscscanIcon />
          </a>
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
