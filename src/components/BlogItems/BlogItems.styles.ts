import styled from "styled-components"
import { tokens } from "../tokens"

interface DarkProps {
  dark: boolean
}

export const BlockWrapper = styled.div`
  padding: ${tokens.spacingXs};
`

export const Block = styled.button<DarkProps>`
  min-height: 100px;
  width: calc(100% - 20px);
  padding: 0;
  text-align: left;
  font-family: ${tokens.font};
  background-color: ${(props) => (props.dark ? tokens.dark : tokens.white)};
  color: ${(props) => (props.dark ? tokens.light : tokens.dark)};
  border: 0;
  cursor: pointer;

  @media screen and (max-width: ${tokens.mobile}) {
    min-height: ${tokens.spacing2Xl};
  }
`

export const MiniWrapper = styled.div`
  display: flex;
  margin: ${tokens.spacingS} 0;
  align-items: baseline;

  @media screen and (max-width: ${tokens.mobile}) {
    > button:first-child {
      margin-left: 70px;
    }

    /* only show first 3 children */
    > button:nth-last-child(n + 3) {
      display: none;
    }
  }
`

export const Title = styled.div`
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;

  &:hover {
    color: ${tokens.hover};
  }

  @media screen and (max-width: ${tokens.mobile}) {
    font-size: 20px;
  }
`

export const Description = styled.div`
  font-size: 20px;
  font-weight: 400;
  opacity: 0.7;
  margin-top: ${tokens.spacingS};

  @media screen and (max-width: ${tokens.mobile}) {
    font-size: 16px;
  }
`

export const Date = styled.div`
  font-size: 16px;
  font-style: italic;
  color: #777;
`
