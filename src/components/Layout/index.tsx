import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import "../../../static/fonts/fonts.css"

const GlobalStyles = createGlobalStyle`
  body {
    font: 400 18px Yaldevi, sans-serif;
    padding: 0;
    margin: 0;
  }
`

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    justify-content: center;

    a {
      text-shadow: none;
      background-image: none;
      margin: 20px;
    }
  }
`

const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyles />
      <header>
        <Link to="/">
          <img src="../../img/JasmineJones.png" />
        </Link>
      </header>
      {children}
    </StyledLayout>
  )
}

export default Layout
