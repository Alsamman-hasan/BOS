import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./HeaderMenu.module.scss";
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import { Layout } from 'shared/ui/Layout/Layout';
import { catigory } from './data';
import { Htag, HTypes } from 'shared/ui/Htage/Htage';

export interface HeaderMenuProps {
  className?: string;
}

export const HeaderMenu = memo((props: HeaderMenuProps) => {
  const { t } = useTranslation("header")
  const { className } = props;
  return (
    <Wrapper className={classNames(cls.HeaderMenu, {}, [className])}>
      <Layout className={cls.items}>
        {catigory.map((item) => (
          <div className={cls.ItemWrapper} key={item.idCategory}>
            <Htag tage={HTypes.H2} className={cls.item}>
              {item.name}
            </Htag>
          </div>
        ))}
      </Layout>
    </Wrapper>
  )
});
