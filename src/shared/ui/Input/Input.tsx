import {
  CSSProperties,
  InputHTMLAttributes,
  memo,
  useCallback,
  useMemo,
  useState
} from "react";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./Input.module.scss";
import { Htag, HTypes } from '../Htage/Htage';
import EyeHide from '../../assets/icons/eye-hide.svg';
import EyeShow from '../../assets/icons/eye-show.svg';
import { Button } from '../Buttons/Button';
import { ButtonTheme } from '../Buttons/types';


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">


export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  label?: string | undefined | null;
  errorMessage?: string;
  style?: CSSProperties;
  name: string;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    label,
    value,
    onChange,
    type = "text",
    required = false,
    errorMessage,
    style,
    name,
    ...othreProps

  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);


  const onShowPasspord = () => {
    setShowPassword(prev => !prev);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }

  const handleFocus = () => {
    setFocused(true);
  };

  const Types = useMemo(() => {
    if (type === 'password' && !showPassword) {
      return 'password'
    } else if (type !== 'password') {
      return type;
    }
    return 'text'
  }, [showPassword, type])

  return (
    <div className={classNames(cls.Input, {}, [className])}>
      <div className={cls.inputWrapper}>
        <input
          style={style}
          id={`${name}-input`}
          value={value}
          type={Types}
          onChange={onChangeHandler}
          required={required}
          onBlur={handleFocus}
          onFocus={() => name === "confirmPassword" && setFocused(true)}
          title={focused.toString()}
          {...othreProps}
        />
        {type === "password" &&
          <div onClick={onShowPasspord} className={cls.icon}>
            {showPassword
              ? <EyeShow />
              : <EyeHide />
            }
          </div>
        }
        {errorMessage &&
          <Htag tage={HTypes.H5} className={cls.error}>
            {errorMessage}
          </Htag>}
      </div>
      {label && <label htmlFor={`${name}-input`}>
        <Htag tage={HTypes.H5} className={cls.Label}>
          {`${label} ${required ? "*" : ""}`}
        </Htag>
      </label>
      }
    </div>
  )
});


