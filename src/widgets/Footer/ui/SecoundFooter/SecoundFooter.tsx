import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./SecoundFooter.module.scss";
import FaceBookIcon from "shared/assets/icons/facebook.svg";
import YoutubeIcon from "shared/assets/icons/youtube.svg";
import InstagramIcon from "shared/assets/icons/instagram.svg";
import MaestroIcon from "shared/assets/icons/maestro.svg";
import MastercardIcon from "shared/assets/icons/mastercard.svg";
import MirIcon from "shared/assets/icons/mir.svg";
import VisaIcon from "shared/assets/icons/visa.svg";
import { P, PTags } from 'shared/ui/Paragraph/P';

export interface SecoundFooterProps {
  className?: string;
}

export const SecoundFooter = memo((props: SecoundFooterProps) => {
  const { t } = useTranslation()
  const { className } = props;
  return (
    <div className={classNames(cls.SecoundFooter, {}, [className])}>
      <div>
        <P tage={PTags.L} className={cls.componyName}>
          © 2020 Название компании
        </P>
      </div>
      <div className={cls.coin}>
        <VisaIcon/>
        <MastercardIcon/>
        <MaestroIcon/>
        <MirIcon/>
      </div>
      <div>
        <P tage={PTags.L} className={cls.componyName}>
          Политика обработки персональных данных
        </P>
      </div>
      <div className={cls.social} >
        <YoutubeIcon className={cls.Icon}/>
        <InstagramIcon className={cls.Icon} />
        <FaceBookIcon className={cls.Icon} />
      </div>
    </div>
  )
});
