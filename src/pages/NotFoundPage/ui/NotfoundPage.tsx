import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { memo } from "react";
import cls from "./NotfoundPage.module.scss";
import { Page } from 'widgets/Page/Page';


export interface NotfoundPageProps {
  className?: string;
}
export const NotfoundPage = memo(({ className }: NotfoundPageProps) => {
  const { t } = useTranslation()
  return (
    <Page className={classNames(cls.NotfoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </Page>
  )
});