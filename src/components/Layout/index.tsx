import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import "../../../static/fonts/fonts.css"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jasmine Jones</title>
        <meta name="description" content="Portfolio, Statement, and Stuff..." />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
