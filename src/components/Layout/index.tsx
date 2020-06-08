import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle, css } from "styled-components"
import "../../../static/fonts/fonts.css"
import { Helmet } from "react-helmet"
import { slide as Menu } from "react-burger-menu"

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
    padding: 20px;

    a {
      text-shadow: none;
      background-image: none;

      img {
        max-width: 100%;
      }
    }

    @media (max-width: 710px) {
      padding-left: 100px;
    }
  }

  ${({ bg }) =>
    bg &&
    css`
      background-image: url(${bg});
      background-size: cover;
    `}
`

const Main = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: white;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`

const Layout: React.FC<{ background?: string }> = ({
  children,
  background,
}) => {
  return (
    <Main>
      <Menu>
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="portfolio" className="menu-item" to="/portfolio">
          Portfolio
        </Link>
        <Link id="statement" className="menu-item" to="/statement">
          Artist Statement
        </Link>
        <Link id="biography" className="menu-item" to="/biography">
          Biography
        </Link>
      </Menu>
      <StyledLayout bg={background}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Jasmine Jones</title>
          <meta
            name="description"
            content="Portfolio, Statement, and Stuff..."
          />
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
    </Main>
  )
}

export default Layout
