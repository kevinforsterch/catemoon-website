import React from "react"
import styled from "styled-components"

const Counter = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="counter">
          <div className="single-counter">
            <div>1</div>
            <p>Holders</p>
          </div>
          <div className="single-counter">
            <div>0</div>
            <p>Price</p>
          </div>
          <div className="single-counter">
            <div>100,000,000,000</div>
            <p>Supply</p>
          </div>
          <div className="single-counter">
            <div>0</div>
            <p>Marketcap</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--main-blue-04);

  .container {
    max-width: 1040px;
  }

  .counter {
    padding: 2rem 0;
    display: flex;
    align-items: center;

    .single-counter {
      width: 100%;
      max-width: 350px;
      text-align: center;
      flex: 1;
      padding: 0.5rem;

      div {
        border-radius: 15px;
        padding: 0.5rem 1rem;
        color: var(--main-blue-04);
        background-color: white;
        font-weight: 800;
        margin-bottom: 0.5rem;
        word-break: break-all;
      }

      & > p {
        color: white;
      }
    }
  }

  @media screen and (max-width: 1040px) {
    .container {
      max-width: 700px;
    }

    .counter {
      flex-direction: column;

      .single-counter:not(:last-of-type) {
        margin-bottom: 0.5rem;
      }
    }
  }
`

export default Counter
