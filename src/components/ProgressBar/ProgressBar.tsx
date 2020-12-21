import React from "react"
import { ProgressBarBar, ProgressBarWrapper } from "./ProgressBar.styles"
import { ProgressBarProps } from './ProgressBar.types'

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarBar progress={progress} />
    </ProgressBarWrapper>
  );
};
