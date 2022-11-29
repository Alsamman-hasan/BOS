import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import cls from "./Header.module.scss";
import { HeaderFirstLine } from '../HeaderFirstLine/HeaderFirstLine';
import { HeaderSecondLine } from '../HeaderSecondLine/HeaderSecondLine';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';

export interface HeaderProps {
  className?: string;
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
  return (
    <header className={classNames(cls.Header, {}, [className])}>
      <Wrapper className={cls.Wrapper}>
        <HeaderFirstLine />
        <HeaderSecondLine />
      </Wrapper>
      <HeaderMenu />
    </header>
  )
});
