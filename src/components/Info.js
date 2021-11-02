import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { bodyBg, cat5, cat3, cat4, cat2, cat6 } from "../assets/images"

const Intro = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0)

  const handleScroll = (e) => {
    const container = document.getElementById("infoRef")

    const windowWidth = window.innerWidth

    const offset =
      windowWidth < 1064 ? 0 : container.getBoundingClientRect().y / 5

    setParallaxOffset(offset)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    window.dispatchEvent(new CustomEvent("scroll"))

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Wrapper id="infoRef">
      <div
        className="parallax-bg"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div className="container">
        <div className="flexbox">
          <div className="image-container">
            <img id="firstCat" src={cat5} alt="Cat Seeking Stars" />
          </div>
          <div className="text">
            <p className="big-font">
              People have lots of different feelings and thoughts about doge
              coins, but one thing is for certain — there are way too many of
              them available on the market. Not only do they all fall into the
              shitcoin category, but new ones appear as fast as the US prints
              dollars.
            </p>
          </div>
        </div>
        <div className="flexbox">
          <div className="image-container">
            <img id="secondCat" src={cat3} alt="Astronaut Cat" />
          </div>
          <div className="text">
            <p>
              Introducing CateMoon as the unique alternative.
              <br />
              There are a few things to think about with CateMoon that make us
              different.
              <br />
              First of all, CateMoon is unique, unlike the latest doge-themed
              coin that was released. Or the one before that. Or the one before
              that… and so on. With doge-themed coins, it’s copycat after
              copycat after copycat, all hoping to grab a slice of the pie
              without doing anything different.
            </p>
            <p>We’re unique, though, as we’re not a doge coin.</p>
            <p>We are CateMoon.</p>
          </div>
        </div>
        <div className="flexbox">
          <div className="image-container">
            <img id="thirdCat" src={cat4} alt="Cat Reached Moon" />
          </div>
          <div className="text">
            <p className="big-font">Next Level Marketing</p>
            <p>
              The final key differentiator between CateMoon and all those doge
              coin impersonators is the next level marketing strategy that we
              are implementing. The new and innovative techniques that we will
              be using will help CateMoon get the traction it deserves, leaving
              behind all those other meme coins that don’t do anything more than
              exist, with some pretty images.
            </p>
            <p>
              We want everyone to hear about CateMoon, as our main focus is on
              the adoption of the coin. So, we’re going to invest all the profit
              that CateMoon makes into ads. We’ll have ads running on Reddit,
              YouTube, your grandma’s favorite cooking channel, and everywhere
              else we can find. We’ll also get TikTok influencers on board to
              spread the word to their followers.
            </p>
          </div>
        </div>
        <div className="flexbox">
          <div className="image-container">
            <img id="fourthCat" src={cat2} alt="Cat On A Rocket" />
          </div>
          <div className="text">
            <p>
              The best part is we will be giving rewards to everyone who helps
              us promote CateMoon to their communities. All CateMoon users can
              be part of the effort, with benefits for everyone who gets
              involved.
            </p>
            <p>
              What does this mean? It means you will get rewards when you
              follow, like, and retweet the content that we post on social
              media. And the earlier you get involved, the more profitable it
              will be.
            </p>
          </div>
        </div>
        <div className="flexbox">
          <div className="image-container">
            <img id="fifthCat" src={cat6} alt="Stranding Cat" />
          </div>
          <div className="text">
            <p>
              So, it comes down to this: there are shitcoins that are simply
              replicas of the shitcoins that came before them—think of every
              doge-themed coin you’ve ever heard of. Then there are DeFi meme
              coins that are going down a unique path, with a unique approach
              and strategy. The choice is simple.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding-bottom: 10rem;

  .container {
    max-width: 1040px;
  }

  .parallax-bg {
    background-image: url("${bodyBg}");
    background-attachment: fixed;
    background-position: top;
    height: 200%;
    margin-top: -220px;
  }

  .flexbox {
    display: flex;
    align-items: center;
    padding: 4rem 0;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    .text {
      flex: 1;

      p {
        &:not(:first-of-type) {
          margin-top: 2rem;
        }
      }
    }

    img {
      position: relative;
      z-index: 1;
      max-width: 500px;
    }

    #firstCat {
      max-width: 488px;
      margin-left: -3rem;
      animation: rotate 3s linear infinite;

      & ~ .text {
        margin-left: 3rem;
      }
    }
    #secondCat {
      max-width: 445px;
      margin-right: -3rem;
      animation: moveX 3s linear infinite;

      & ~ .text {
        margin-right: -3rem;
      }
    }
    #thirdCat {
      max-width: 410px;
      margin-left: -3rem;
      animation: crib 3s linear infinite;

      & ~ .text {
        margin-left: 3rem;
      }
    }
    #fourthCat {
      max-width: 543px;
      margin-right: -3rem;
      animation: launch 3s linear infinite;

      & ~ .text {
        margin-right: -2rem;
      }
    }
    #fifthCat {
      max-width: 309px;
      margin-left: -3rem;
      animation: hover 3s linear infinite;

      & ~ .text {
        margin-left: 5rem;
      }
    }
  }

  @media screen and (max-width: 1040px) {
    .container {
      max-width: 700px;
    }

    .parallax-bg {
      background-attachment: scroll;
      height: 100%;
      margin-top: 0;
    }

    .flexbox {
      flex-direction: column !important;

      img,
      .text {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
      }

      img {
        padding: 0 2rem;
        margin-bottom: 2rem !important;
      }
    }
  }

  @media screen and (max-width: 820px) {
    .flexbox {
      flex-direction: column !important;

      img {
        padding: 0 3rem;
      }
    }
  }

  @media screen and (max-width: 475px) {
    padding-bottom: 0;
    .flexbox {
      img {
        padding: 0 1rem;
      }
      #thirdCat {
        max-width: 285px;
      }
      #fifthCat {
        max-width: 250px;
      }
    }
  }
`

export default Intro
