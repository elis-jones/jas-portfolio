import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  background: rgba(227, 227, 227, 0.56);
  justify-content: center;
  margin: 10px;
  padding: 5px;
  width: 300px;
  font-size: 12px;
  height: 25px;
  box-sizing: border-box;
  align-items: center;
`

const pages = [
  { name: "Portfolio", path: "/portfolio" },
  { name: "Artist Statement", path: "/statement" },
  { name: "Biography (CV)", path: "/biography" },
]

const Home: React.FC = () => {
  return (
    <Layout>
      <StyledList>
        {pages.map(page => (
          <StyledLink key={`home_li_${page.name}`} to={page.path}>
            {page.name}
          </StyledLink>
        ))}
      </StyledList>
    </Layout>
  )
}

export default Home
