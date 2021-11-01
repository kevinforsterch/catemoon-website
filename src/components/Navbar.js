import React from "react"
import styled from "styled-components"
import { FaTelegram, FaTwitter } from "react-icons/fa"

import logo from "../assets/images/logo.webp"

const Navbar = () => {
  return (
    <NavContainer id="navbar">
      <nav className="container">
        <img src={logo} alt="CateMoon Logo" loading="lazy" />
        <div>
          <a
            href="https://t.me/joinchat/h-pU65zJ2Pw2OTg0"
            aria-label="telegram"
          >
            <FaTelegram />
          </a>
          <a href="https://twitter.com/CateMoonToken" aria-label="twitter">
            <FaTwitter />
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
      }
    }
  }

  img {
    width: 150px;
  }
`

export default Navbar
