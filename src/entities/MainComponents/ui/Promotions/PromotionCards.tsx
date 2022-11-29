import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import cls from "./Promotions.module.scss";
import { Card } from 'shared/ui/Card/Card';
import { Tages, TagesColor } from 'shared/ui/Tages/Tages';
import { P, PTags } from 'shared/ui/Paragraph/P';
import { data } from '../../model/promotionsDataTest';

export interface PromotionCardsProps {
  className?: string;
}
export const PromotionCards = (props: PromotionCardsProps) => {
  const { t } = useTranslation()
  const { className } = props;
  return (
    <div className={classNames(cls.PromotionCards, {}, [className])}>
      {data.map((item) => (
        <Card key={item.id} className={cls.card}>
          {item.tag && <Tages color={item.tagType}>{item.tag}</Tages>}
          <div className={cls.imgWrapper}>
            <img src={item.img} alt="test"/>
          </div>
          <P tage={PTags.P1}>{item.discraption}</P>
        </Card>
      ))}
    </div>
  )
};