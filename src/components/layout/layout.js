import React from "react"
import { Body, Image } from "./"
import { Navbar, NavItem } from "swag-components"

export const Img = props => (
  <div>
    <Image {...props} />
  </div>
)

export const Layout = ({
  children,
  isLandingPage = true,
  nav_blog,
  nav_brand,
  nav_home,
}) => {
  const goto = (url = "") => {
    document.location.href = url
  }

  return (
    <Body>
      <Navbar onTitleClick={() => goto("/")} title={nav_brand.text}>
        <NavItem onClick={() => goto("#")}>{nav_home.text}</NavItem>
        <NavItem onClick={() => goto("#blog")}>{nav_brand.text}</NavItem>
      </Navbar>
      {children}
    </Body>
  )
}
