import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  color: teal;
`

const Header: React.FC<{ title: string }> = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>
}

export default Header
