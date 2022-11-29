import { classNames, Mods } from "../../lib/classNames/classNames";
import { memo, ReactNode } from "react";
import cls from "./Tages.module.scss";
import { P, PTags } from '../Paragraph/P';


export enum TagesColor {
  NEW = "new",
  PROMOTION = "promotion",
  DELIVERY = "delivery",
  SUCCESS = "success",
}

export interface TagesProps {
  className?: string;
  children: ReactNode;
  color: TagesColor | undefined;
}

export const Tages = memo((props: TagesProps) => {
  const { className, children, color } = props;
  const colors = color ? cls[color] : undefined
  return (
    <div className={classNames(cls.Tages, {}, [className, colors ])}>
      <P tage={PTags.L}>
        {children}
      </P>
    </div>
  )
});
