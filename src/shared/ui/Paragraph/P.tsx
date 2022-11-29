import { classNames } from "../../lib/classNames/classNames";
import { CSSProperties, memo, ReactNode } from "react";
import { useTranslation } from "react-i18next"
import cls from "./P.module.scss";

export enum PTags {
  P1 = "p1",
  P2 = "p2",
  L = "l",
}
export interface PProps {
  tage: PTags;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export const P = memo((props: PProps) => {
  const { t } = useTranslation()
  const { className, children, tage = PTags.L, style } = props;
  switch (tage) {
    case 'p1':
      return <p style={style} className={classNames(cls.P1, {}, [className])}> {children}</p>
    case 'p2':
      return <p style={style} className={classNames(cls.P2, {}, [className])}> {children}</p>
    case 'l':
      return <p style={style} className={classNames(cls.l, {}, [className])}> {children}</p>
    default: return <></>
  }
});
