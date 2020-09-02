import { css } from "styled-components"
import { tokens } from "./tokens"

export const selection = `
  &::selection {
    background-color: ${tokens.hover};
    color: ${tokens.white};
  }
`

export const outline = `
  &:focus {
    outline: 3px solid ${tokens.hover};
  }
`

export const buttonResetStyles = css`
  border: 0;
  margin: 0;
  padding: 0;
  font-family: ${tokens.font};
  font-size: 100%;
  width: auto;
  overflow: visible;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  line-height: normal;
  background-color: transparent;
  -webkit-font-smoothing: inherit; /* stylelint-disable-line */
  -moz-osx-font-smoothing: inherit; /* stylelint-disable-line */
  -webkit-appearance: none; /* stylelint-disable-line */
`
