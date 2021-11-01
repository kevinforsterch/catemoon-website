import React from "react"
import styled from "styled-components"

import logo from "../assets/images/logo.webp"

const Navbar = () => {
  return (
    <NavContainer id="navbar">
      <nav className="container">
        <img src={logo} alt="CateMoon Logo" />
      </nav>
    </NavContainer>
  )
}

const NavContainer = styled.header`
  background-color: white;
  padding: 1.5rem 0;

  nav {
    display: flex;
  }

  img {
    width: 150px;
    margin: auto;
  }
`

export default Navbar
