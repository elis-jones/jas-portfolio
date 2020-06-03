import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle, css } from "styled-components"
import "../../../static/fonts/fonts.css"
import { Helmet } from "react-helmet"

const GlobalStyles = createGlobalStyle`
  body {
    font: 400 18px Karma;
    padding: 0;
    margin: 0;
  }
`

const StyledLayout = styled.div<{ bg?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  header {
    display: flex;
    justify-content: center;

    a {
      text-shadow: none;
      background-image: none;
      margin: 20px;
    }
  }

  ${({ bg }) =>
    bg &&
    css`
      background-image: url(${bg});
      background-size: cover;
    `}
`

const Layout: React.FC<{ background?: string }> = ({
  children,
  background,
}) => {
  return (
    <StyledLayout bg={background}>
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
