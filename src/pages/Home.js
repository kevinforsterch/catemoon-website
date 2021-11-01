import React from "react"
import styled from "styled-components"
import { Intro, Info, Counter, Loading } from "../components"
import { useAppContext } from "../context/app_context"

const HomePage = () => {
  const { isLoading } = useAppContext()

  return (
    <MainWrapper>
      {isLoading && <Loading />}
      <Intro />
      <Counter />
      <Info />
    </MainWrapper>
  )
}

const MainWrapper = styled.main``

export default HomePage
