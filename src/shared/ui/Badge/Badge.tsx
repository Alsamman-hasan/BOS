import { classNames } from "shared/lib/classNames/classNames";
import { memo, ReactNode, SVGProps } from "react";
import "./Badge.scss";
import { Badge } from '@mui/material';

export interface BadgeProps {
  className?: string;
  children: ReactNode ;
  badgeContent?: ReactNode | number | string
}

export const BadgeUI = memo((props: BadgeProps) => {
  const { className, children, badgeContent } = props;
  return (
    <Badge badgeContent={badgeContent} className={classNames("Badge", {}, [className])}>
      {children}
    </Badge>
  )
});
