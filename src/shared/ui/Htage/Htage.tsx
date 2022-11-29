import { classNames } from "../../lib/classNames/classNames";
import { CSSProperties, memo, MouseEventHandler, ReactNode } from "react";
import { useTranslation } from "react-i18next"
import cls from "./Htage.module.scss";


export enum HTypes {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
}
export interface HtageProps {
  className?: string;
  tage: HTypes;
  children: ReactNode;
  style?: CSSProperties;
}

export const Htag = memo((props: HtageProps): JSX.Element => {
  const { children, tage = HTypes.H1, className,style, ...othreProps} = props;
  switch (tage) {
    case 'h1':
      return <span style={style} {...othreProps} className={classNames(cls.h1, {}, [className])}>{children}</span>
    case 'h2':
      return <span style={style} {...othreProps} className={classNames(cls.h2, {}, [className])}>{children}</span>
    case 'h3':
      return <span style={style} {...othreProps} className={classNames(cls.h3, {}, [className])}>{children}</span>
    case 'h4':
      return <span style={style} {...othreProps} className={classNames(cls.h4, {}, [className])}>{children}</span>
    case 'h5':
      return <span style={style} {...othreProps} className={classNames(cls.h5, {}, [className])}>{children}</span>
    default:
      return <></>
  }
});
