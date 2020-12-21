import styled from "styled-components"
import { getBackgroundColor } from "./ProgressBar.utils"
import { ProgressBarProps } from './ProgressBar.types'


export const ProgressBarWrapper = styled.div`
  position: sticky;
  left: 0;
  top: -1px;
  z-index: 99;
  width: 100%;
  height: 5px;
`

export const ProgressBarBar = styled.div.attrs(
  ({ progress }: ProgressBarProps) => ({
    style: { width: `${progress}%` },
  })
)<ProgressBarProps>(
  ({ progress }: ProgressBarProps) => `
  height: 100%;
  transition: all 0.5s ease;
  background-color: ${getBackgroundColor(progress)};
`
)
