import React from "react"
import {
  Body,
  Icon,
  Navbar,
  NavItem,
  TopRow,
  BottomRow,
  MoonIcon,
  SunIcon,
  IconContainer,
} from "./Layout.styles"
import { navigate } from "gatsby"

export const Layout = ({
  children,
  isLandingPage = true,
  blog = "",
  home = "",
  projects = "",
  brand = "",
  dark = false,
  toggleDarkMode = null,
}: any) => {
  const goto = (url = "") => {
    console.log("yo")
    navigate(url)
  }

  return (
    <Body dark={dark}>
      <Navbar dark={dark}>
        <TopRow dark={dark}>
          <NavItem onClick={() => goto("/")}>Harris Geo</NavItem>
          <NavItem onClick={toggleDarkMode}>
            <IconContainer>{dark ? <MoonIcon /> : <SunIcon />}</IconContainer>
          </NavItem>
        </TopRow>
        <BottomRow dark={dark}>
          <NavItem onClick={() => goto("/blogs")}>{blog}</NavItem>
          <NavItem onClick={() => goto("/projects")}>Projects</NavItem>
        </BottomRow>
      </Navbar>
      {children}
    </Body>
  )
}
