import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { introBg, cat1 } from '../assets/images';
import { useAppContext } from '../context/app_context';

const Intro = () => {
    const { isLoading } = useAppContext();
    const [parallaxOffset, setParallaxOffset] = useState(0);

    const handleBackgroundPosition = e => {
        const windowWidth = window.innerWidth;

        const offset = windowWidth < 1064 ? 0 : window.pageYOffset / 1.2;

        setParallaxOffset(offset);
    };

    const handleAnimation = e => {
        if (
            document.getElementById('introRef').getBoundingClientRect().y > -750
        ) {
            document.querySelector('.intro').classList.add('animate');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleBackgroundPosition);
        window.dispatchEvent(new CustomEvent('scroll'));

        if (!isLoading) {
            window.addEventListener('scroll', handleAnimation);
            window.dispatchEvent(new CustomEvent('scroll'));

            return () => {
                window.removeEventListener('scroll', handleBackgroundPosition);
                window.removeEventListener('scroll', handleAnimation);
            };
        }
    }, [isLoading]);

    return (
        <>
            <Wrapper id="introRef">
                <div
                    className="parallax-bg"
                    style={{ transform: `translateY(${parallaxOffset}px)` }}
                ></div>
                <div className="container">
                    <div className="intro">
                        <h2>
                            CATEMOON STARTS NEW GENERATION OF DEFI MEME COINS
                        </h2>
                        <div className="image-container">
                            <img src={cat1} alt="Cat On A Rocket" />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    position: relative;
    padding-top: 450px;
    overflow: hidden;

    .parallax-bg {
        top: -88px;
        height: calc(100% + 88px);
        background-image: url('${introBg}');
    }

    .intro {
        display: flex;

        * {
            transition: transform 1s linear, opacity 1s linear;
        }

        h2 {
            flex: 1;
            transform: translateX(30%);
            opacity: 0;
        }
        img {
            max-width: 510px;
            transform: translateX(calc(-30% - 100px));

            @media screen and (max-width: 1200px) {
                transform: translateX(calc(-30% - 25px));
            }
        }

        &.animate {
            h2 {
                transform: translateX(0);
                opacity: 1;
            }

            img {
                transform: translate(-100px, -115px);

                @media screen and (max-width: 1200px) {
                    transform: translate(-25px, -115px);
                }
            }
        }
    }

    @media screen and (max-width: 1040px) {
        padding: 4rem 0;

        .intro {
            flex-direction: column-reverse;

            img {
                max-width: 450px;
                padding: 0 3rem;
                margin: 0 auto;
                margin-bottom: 4rem;
                transform: translateX(-30%) translateY(115px);
            }

            &.animate {
                img {
                    transform: translate(0);
                }
            }
        }
    }
`;

export default Intro;
