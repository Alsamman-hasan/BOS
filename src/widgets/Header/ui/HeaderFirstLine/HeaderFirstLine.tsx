import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./HeaderFirstLine.module.scss";
import { Htag, HTypes } from 'shared/ui/Htage/Htage';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import { Layout } from 'shared/ui/Layout/Layout';
import { Link } from 'react-router-dom';

export interface HeaderFirstLineProps {
  className?: string;
}

export const HeaderFirstLine = memo((props: HeaderFirstLineProps) => {
  const { t } = useTranslation("header")
  const { className } = props;
  return (
    <Wrapper className={cls.Wrapper}>
      <Layout className={classNames(cls.HeaderFirstLine, {}, [className])}>
        <Link to="/about">
          <div>Киев, Украина</div>
        </Link>

        <div className={cls.menu}>
          <Htag tage={HTypes.H4}>
            Каталог
          </Htag>
          <Htag tage={HTypes.H4}>
            Акции
          </Htag>
          <Htag tage={HTypes.H4}>
            Доставка и оплата
          </Htag>
        </div>
        <div className={cls.lang}>
          <LangSwitcher />
        </div>
      </Layout>
    </Wrapper>
  )
});
