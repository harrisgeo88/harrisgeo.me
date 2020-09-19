import { H1 as H1Layout, Tag as TagLayout } from "../Layout"
import { tokens } from "../tokens"
import styled from "styled-components"
import MerriweatherFontFace from "../../assets/fonts/merriweather"

const font = "Merriweather"

export const PostContainer = styled.div<{ dark: boolean }>`
  ${MerriweatherFontFace};

  margin: 50px 0;
  font-family: ${font};
  line-height: 2;

  > h3 {
    margin: 40px 0;
  }

  > p > code,
  ol > li > code {
    background: none;
  }

  > div > pre {
    margin: ${tokens.spacing};
    padding: ${tokens.spacing};
    color: red;
    background-color: ${tokens.dark};
    white-space: pre;
    text-shadow: 0 1px 0 ${tokens.black};
    font: 16px/24px "Courier New", Courier, "Lucida Sans Typewriter",
      "Lucida Typewriter", monospace;
  }

  .language-text {
    color: ${tokens.hover};
  }

  > ol > li > a,
  > p > a {
    color: ${(props) => (props.dark ? tokens.white : tokens.dark)};
    font-weight: 600;
    :hover {
      color: ${tokens.hover};
    }
  }

  img {
    max-width: 800px;
  }

  @media screen and (max-width: ${tokens.mobile}) {
    img {
      max-width: 350px;
    }
  }
  @media screen and (min-width: ${tokens.mobile}) and (max-width: ${tokens.tablet}) {
    img {
      max-width: 700px;
    }
  }
`
export const H1 = styled(H1Layout)`
  font-family: ${font};
`

export const Footer = styled.div`
  width: 100%;
  padding-bottom: ${tokens.spacing};
`

export const P = styled.p`
  font-size: 14px;
`

export const TagWrapper = styled.div`
  font-size: 14px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: baseline;
`

export const Tag = styled(TagLayout)`
  margin-top: ${tokens.spacingXs};
  margin-bottom: ${tokens.spacingXs};
`
