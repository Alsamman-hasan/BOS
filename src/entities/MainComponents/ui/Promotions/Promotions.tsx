import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./Promotions.module.scss";
import { Card } from 'shared/ui/Card/Card';
import { Layout } from 'shared/ui/Layout/Layout';
import { Tabs } from 'shared/ui/Tabs';
import { Htag, HTypes } from 'shared/ui/Htage/Htage';
import { PromotionCards } from './PromotionCards';

export interface PromotionsProps {
  className?: string;
}

export const Promotions = memo((props: PromotionsProps) => {
  const { t } = useTranslation("mainPage")
  const { className } = props;
  const tabs = useMemo(
    () => [
      {
        tab: t("ALL"),
        element: <PromotionCards/>
      },
      {
        tab: t("BAA"),
        element: <Card> {t("BAA")}</Card>
      },
      {
        tab: t("Prebiotics"),
        element: <Card> {t("Prebiotics")}</Card>
      },
      {
        tab: t("Probiotics"),
        element: <Card> {t("Probiotics")}</Card>
      },
      {
        tab: t("SPORT"),
        element: <Card> {t("SPORT")}</Card>
      },
      {
        tab: t("vitamins"),
        element: <Card> {t("vitamins") }</Card>
      }
    ],
    [t]
  );

  return (
    <Layout className={classNames(cls.Promotions, {}, [className])}>
      <div>
        <Htag tage={HTypes.H1} className={cls.header}>
          {t("PROMOTIONS")}
        </Htag>
        <Tabs className={cls.tab} tabs={tabs} classTabs={cls.tabsHeader}/>
      </div>
    </Layout>
  )
});
