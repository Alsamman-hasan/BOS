import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./Advantages.module.scss";
import { Layout } from 'shared/ui/Layout/Layout';
import DeliveryIcon from "shared/assets/icons/delivery.svg"
import MedalIcon from "shared/assets/icons/medal.svg"
import ReturnIcon from "shared/assets/icons/icon_return.svg"
import ItemsIcon from "shared/assets/icons/icon_items.svg"
import { Htag, HTypes } from 'shared/ui/Htage/Htage';
import { P, PTags } from 'shared/ui/Paragraph/P';

export interface AdvantagesProps {
  className?: string;
}

export const Advantages = memo((props: AdvantagesProps) => {
  const { t } = useTranslation("mainPage")
  const { className } = props;
  const elements = useMemo(() => {
    return [
      { icon: DeliveryIcon, title: t("Delivery"), description: t("PICKUP") },
      { icon: MedalIcon, title: t("Guarantee"), description: t("MEDAL_DESC") },
      { icon: ReturnIcon, title: t("RETURN_TITLE"), description: t("RETURN_DESC") },
      { icon: ItemsIcon, title: t("ITEMS_TITLE"), description: t("ITEMS_DESC") },
    ]
  }, [t])

  return (
    <Layout className={classNames(cls.Advantages, {}, [className])}>
      {elements.map((item) => (
        <div key={item.title} className={cls.itemsWrapper}>
          <item.icon />
          <Htag
            className={cls.Htage}
            tage={HTypes.H3}
          >
            {item.title}
          </Htag>
          <P
            className={cls.Ptage}
            tage={PTags.P2}
          >
            {item.description}
          </P>
        </div>
      ))}
    </Layout>
  )
});
