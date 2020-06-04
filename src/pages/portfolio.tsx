import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { StyledList, StyledLink } from "."

const StyledPortfolio = styled.div`
  background: url("../../img/background.png");
  background-size: cover;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30% 30% 30%;

  .item {
    width: 100px;
    height: 40px;
  }

  @media (max-width: 480px) {
    grid-template-rows: 350px 350px 350px;
  }
`

export default () => (
  <Layout background="../../img/home.png">
    <StyledList>
      <StyledLink to="/clay/">Clay</StyledLink>
      <StyledLink to="/paintinganddrawing">Painting & drawing</StyledLink>
      <StyledLink to="/filmandother/">Film & other</StyledLink>
    </StyledList>
  </Layout>
)
