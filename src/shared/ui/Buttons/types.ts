import { ButtonHTMLAttributes, CSSProperties } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  circle?: boolean;
  size?: ButtonSize;
  disabled?: boolean
  style?: CSSProperties;
}


export enum ButtonTheme {
  CLEAR = "clear",
  ORANGE_MIX = "orange_mix",
  OUTLINE = "outline",
  SECONDARY = "secondary",
  PRIMARY='primary'
}

export enum ButtonSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}