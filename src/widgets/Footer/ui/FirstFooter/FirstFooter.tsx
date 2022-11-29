import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./FirstFooter.module.scss";
import { Htag, HTypes } from 'shared/ui/Htage/Htage';
import { P, PTags } from 'shared/ui/Paragraph/P';
import { Subscribe } from 'entities/Subscribe';

export interface FirstFooterProps {
  className?: string;
}

export const FirstFooter = memo((props: FirstFooterProps) => {
  const { t } = useTranslation("Footer")
  const { className } = props;
  return (
    <div className={classNames(cls.FirstFooter, {}, [className])}>
      <div className={cls.items}>
        <Htag tage={HTypes.H5} className={cls.header} >
          Покупателям
        </Htag>
        <Htag tage={HTypes.H5} className={cls.item}>
          Акции
        </Htag>
        <Htag tage={HTypes.H5} className={cls.item}>
          FAQ
        </Htag>
        <Htag tage={HTypes.H5} className={cls.item}>
          Обмен/возврат товаров
        </Htag>
      </div>
      <div className={cls.items}>
        <Htag tage={HTypes.H5} className={cls.header} >
          О компании
        </Htag>
        <Htag tage={HTypes.H5} className={cls.item}>
          Вакансии
        </Htag>
        <Htag tage={HTypes.H5} className={cls.item}>
          Партнерство
        </Htag>
        <Htag tage={HTypes.H5} className={cls.item}>
          Доставка и оплата
        </Htag>
      </div>
      <div className={cls.items}>
        <Htag tage={HTypes.H1} className={cls.Formheader} >
          Подпишитесь на акции
          и специальные предложения
        </Htag>
        <P tage={PTags.P2} className={cls.p} >
          Нажимая на кнопку “Подписаться” вы соглашаетесь
          на обработку персональных данных
        </P>
        <Subscribe/>
      </div>
    </div>
  )
});
