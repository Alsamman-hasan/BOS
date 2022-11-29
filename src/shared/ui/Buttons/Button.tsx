import { classNames } from "../../lib/classNames/classNames";
import { memo } from "react";
import cls from "./Button.module.scss";
import { ButtonProps, ButtonSize, ButtonTheme } from './types';


export const Button = memo((props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.ORANGE_MIX,
    circle = false,
    size = ButtonSize.M,
    style,
    disabled = false,
    ...otherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls.circle]: circle,
    [cls.disabled]: disabled
  };
  return (
    <button 
      type='button'
      style={style}
      disabled={disabled}
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  )
});
