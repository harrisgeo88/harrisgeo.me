import React from "react"
import {
  Body,
  Navbar,
  NavItem,
  TopRow,
  BottomRow,
  MoonIcon,
  SunIcon,
  IconContainer,
  LeftContainer,
  RightContainer,
} from "./Layout.styles"
import { navigate } from "gatsby"

export const Layout = ({
  children,
  blog = "",
  projects = "",
  feed = "",
  dark = false,
  toggleDarkMode = null,
}: any) => {
  const goto = (url = "") => {
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
          <LeftContainer>
            <NavItem onClick={() => goto("/blogs")}>{blog}</NavItem>
            <NavItem onClick={() => goto("/projects")}>{projects}</NavItem>
          </LeftContainer>
          <RightContainer>
            <NavItem onClick={() => goto("/feed.xml")}>{feed}</NavItem>
          </RightContainer>
        </BottomRow>
      </Navbar>
      {children}
    </Body>
  )
}
