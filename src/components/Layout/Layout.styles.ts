import styled from "styled-components"
import { tokens } from "../tokens"
import { layout, space, LayoutProps, SpaceProps } from "styled-system"
import { selection, outline, buttonResetStyles } from "../styleHelpers"

interface StyledSystemProps extends LayoutProps, SpaceProps {}

interface Dark {
  dark: boolean
}

export const Frame = styled.div<Dark>`
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => (props.dark ? tokens.dark : tokens.white)};
  height: 100%;
  width: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  --titleColor: ${props => (props.dark ? tokens.white : tokens.dark)};
  --bodyColor: ${props => (props.dark ? tokens.grey : tokens.dark)};

  * {
    ${selection}
    ${outline}
  }
`

export const Greet = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: ${tokens.spacing};
  color: var(--titleColor);
`

export const Body = styled.div<Dark>`
  position: absolute;
  font-family: ${tokens.font};
  width: 100%;
  height: 100%;
  color: ${(props) => (props.dark ? tokens.light : tokens.dark)};
  -webkit-font-smoothing: antialiased;
`

export const Navbar = styled.header<Dark>`
  margin: 0 ${tokens.spacing3Xl};
  padding: 0 ${tokens.spacingL};
  background-color: ${(props) => (props.dark ? tokens.dark : tokens.white)};
  color: ${(props) => (props.dark ? "#5f6c80" : "#7f8ea3")};
  margin-bottom: ${tokens.spacing3Xl};

  @media screen and (max-width: ${tokens.mobile}) {
    margin: 0;
    padding: 0 15px;
  }

  @media screen and (min-width: ${tokens.mobile}) and (max-width: ${tokens.tablet}) {
    padding: 0 ${tokens.spacingL};
    margin: 0 ${tokens.spacingXl};
  }
`

export const Container = styled.section<Dark>`
  margin: 0 ${tokens.spacing3Xl};
  padding: 0 ${tokens.spacingL};
  background: ${(props) => (props.dark ? tokens.dark : tokens.white)};
  margin-top: ${tokens.spacing3Xl};
  margin-bottom: ${tokens.spacing4Xl};

  @media screen and (max-width: ${tokens.mobile}) {
    margin: 0;
    margin-top: 40px;
    padding: 15px;
  }

  @media screen and (max-width: ${tokens.mobileXs}) {
    width: 300px;
  }

  @media screen and (min-width: ${tokens.mobile}) and (max-width: ${tokens.tablet}) {
    margin-left: ${tokens.spacingXl};
    margin-right: ${tokens.spacingXl};
  }

  &&&#blog {
    margin-bottom: 50px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;

  @media all and (max-width: ${tokens.mobile}) {
    display: block;
  }
`

export const Bio = styled.div`
  margin: 0;
  padding: 0 ${tokens.spacing};
  font-weight: 200;
  font-size: 24px;
  text-align: left;

  @media screen and (max-width: ${tokens.mobile}) {
    font-size: 16px;
    margin-top: ${tokens.spacing};
    padding: 0;
  }
  > p {
    margin: 0;
  }
`

export const TypedContainer = styled.div`
  display: flex;
`
export const TypedContent = styled.div`
  padding: 0 ${tokens.spacing2Xs};
  > b {
    color: var(--titleColor);
  }
`

export const IconsContainer = styled.div`
  margin-top: ${tokens.spacing};
  &&& > a:first-child {
    padding-left: 0;
  }
  &&& > a {
    padding: 0 ${tokens.spacingXs};
  }
  text-align: left;

  @media screen and (max-width: ${tokens.mobile}) {
    text-align: center;
  }
`

export const A = styled.a<Dark>`
  ${buttonResetStyles};
  color: ${(props) => (props.dark ? tokens.light : tokens.dark)};
  font-weight: 300;
  text-decoration: none;
  cursor: pointer;
  margin: 0 ${tokens.spacingXs};

  &:hover {
    text-decoration: underline;
    color: ${tokens.hover};
  }
`

export const Link = styled(A).attrs({ as: "button" })<Dark>``

export const Icon = styled.img<StyledSystemProps>`
  ${layout}
  ${space}
`

export const SocialMediaIcon = styled(Icon)`
  margin: ${tokens.spacingXs};
`

// TODO: make a function for doing token calculations
export const Image = styled.img`
  border-radius: 300px;
  border: 1px solid grey;
  height: ${tokens.imageY};
  width: ${tokens.imageX};

  @media all and (max-width: ${tokens.mobile}) {
    position: relative;
    left: calc(50% - 100px);
    height: ${tokens.imageYMob};
    width: ${tokens.imageXMob};
  }
`

export const HeaderContainer = styled.div<{ preview: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) =>
    props.preview ? `1px solid ${tokens.light}` : "none"};
  margin-bottom: ${tokens.spacing};
  padding: 0 ${tokens.spacingXs};
`

export const H1 = styled.h1`
  width: 100%;
  font-weight: 500;
  font-size: 48px;
  margin-bottom: ${tokens.spacingXl};
  color: var(--titleColor);

  @media screen and (max-width: ${tokens.mobile}) {
    font-size: 30px;
  }
`

export const H2 = styled.h2`
  font-size: 30px;
  font-weight: 400;
  padding-bottom: 0;
  color: var(--titleColor);
`

export const H3 = styled.h3`
  font-size: 19px;
  font-weight: 400;
  padding-bottom: 0;
  color: var(--titleColor);
`

export const Row = styled.div`
  width: 100%;
  text-align: center;
`

export const Tag = styled.a.attrs({ as: "button" })<Dark>`
  margin: 0 ${tokens.spacingS};
  z-index: 99999;
  border: 1px solid black;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => (props.dark ? tokens.dark : tokens.light)};
  border-radius: 5px;
  background-color: ${(props) => (props.dark ? tokens.white : tokens.dark)};
  padding: ${tokens.spacingXs} ${tokens.spacingS};
  cursor: pointer;

  :hover {
    color: ${tokens.hover};
  }
`

export const TopRow = styled.div<Dark>`
  display: flex;
  line-height: 18px;
  justify-content: space-between;
  padding-top: ${tokens.spacingL};

  &&& > button:first-child {
    color: ${(props) => (props.dark ? "#fff" : "#000")};
    font-size: 30px;
    :hover {
      text-decoration: none;
    }
  }
`

export const BottomRow = styled.div<Dark>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  padding: ${tokens.spacingS} 0;
  border-bottom: 1px solid ${tokens.light};
  color: ${tokens.grey};

  &&& > div > button {
    color: ${(props) => (props.dark ? tokens.light : tokens.grey)};
  }

  &&& > ul:first-child {
    padding-left: 0;
  }
`

export const NavItem = styled.button`
  cursor: pointer;
  font-size: 18px;
  border: none;
  background: transparent;

  margin: ${tokens.spacingS} 0;
  :hover {
    text-decoration: underline;
  }

  @media screen and (max-width: ${tokens.mobile}) {
    margin: ${tokens.spacingS} 0;
    padding: ${tokens.spacingXs};
  }
`
export const IconContainer = styled.div`
  transition: opacity 0.3s ease 0s;
`

export const MoonIcon = styled.span`
  height: 24px;
  width: 24px;
  padding-top: -14px;
  display: block;
  border-radius: 50%;
  box-shadow: inset 8px -8px 0px 0px #fff;
  transition: all 0.45s ease 0s;
`

export const SunIcon = styled.span`
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 24px;
  height: 24px;

  background: linear-gradient(to bottom, currentColor 4px, transparent 0)
      no-repeat 5px -6px/2px 6px,
    linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 5px
      14px/2px 6px,
    linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat -8px 5px/6px
      2px,
    linear-gradient(to bottom, currentColor 4px, transparent 0) no-repeat 14px
      5px/6px 2px;
  border-radius: 100px;
  box-shadow: inset 0 0 0 2px;
  border: 6px solid transparent;

  &&&:after,
  &&&:before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 24px;
    height: 2px;
    border-right: 4px solid;
    border-left: 4px solid;
    left: -6px;
    top: ${tokens.spacingXs};
  }

  &&&:before {
    transform: rotate(-45deg);
  }
  &&&:after {
    transform: rotate(45deg);
  }

  transition: all 0.45s ease 0s;
`

export const LeftContainer = styled.div``

export const RightContainer = styled.div``
