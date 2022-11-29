import { classNames } from "../../lib/classNames/classNames";
import { CSSProperties, InputHTMLAttributes, memo } from "react";
import cls from "./Checkbox.module.scss";
import { P, PTags } from '../Paragraph/P';


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "onChange" | "readOnly">

export interface CheckboxProps extends HTMLInputProps {
  className?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  readonly?: boolean;
  label?: string;
  style?: CSSProperties;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const { 
    className, 
    checked, 
    onChange, 
    readonly, 
    disabled, 
    label, 
    style,
    ...otherProps 
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
    console.log(e.target.checked);
  }

  return (
    <div className={classNames(cls.checkbox, {}, [className])}>
      <input
        style={style}
        onChange={onChangeHandler}
        type="checkbox"
        id={label}
        checked={checked}
        {...otherProps}
      />
      <label htmlFor={label}>
        <P className={cls.label} tage={PTags.P2}>{label}</P>
      </label>
    </div>
  )
});
