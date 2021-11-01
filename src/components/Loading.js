import React from "react"
import styled from "styled-components"
import { fadeSeconds } from "../utils/constants"

const Loading = () => {
  return (
    <Wrapper className="loading-container">
      <div className="loading"></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-blue-04);
  transition: opacity ${fadeSeconds}s linear;

  .loading {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    border-radius: 50%;
    border: 4px solid #774b12;
    border-top-color: var(--orange);
    animation: spinner 0.6s linear infinite;
  }

  &.fade {
    opacity: 0;
  }
`

export default Loading
