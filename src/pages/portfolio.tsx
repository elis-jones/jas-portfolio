import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const StyledPortfolio = styled.div`
  background: url("../../img/background.png");
  height: 100vh;
  width: 100vw;
`

export default () => (
  <Layout>
    <StyledPortfolio>Portfolio</StyledPortfolio>
  </Layout>
)
