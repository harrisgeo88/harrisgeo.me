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

interface LayoutProps {
  children: any;
  blog: string;
  projects: string;
  feed: string;
  newsletter: string;
  dark: boolean;
  toggleDarkMode: () => void
}

export const Layout = ({
  children,
  blog = "",
  projects = "",
  feed = "",
  newsletter = "",
  dark = false,
  toggleDarkMode = () => {},
}: LayoutProps) => {
  const goto = (url = "", newPage?: boolean) => {
    if (newPage) {
      window.open(url, "_blank", "noopener,noreferrer")
    } else {
      navigate(url)
    }
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
            <NavItem onClick={() => goto("https://tinyletter.com/harrisgeo88", true)}>{newsletter}</NavItem>
            <NavItem onClick={() => goto("/feed.xml")}>{feed}</NavItem>
          </RightContainer>
        </BottomRow>
      </Navbar>
      {children}
    </Body>
  )
}
