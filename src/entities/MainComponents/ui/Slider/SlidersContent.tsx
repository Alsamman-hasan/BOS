import { memo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./MainSlider.module.scss";
import { Button } from 'shared/ui/Buttons/Button';
import { ButtonTheme } from 'shared/ui/Buttons/types';
import { SliderItems } from 'entities/MainComponents/model/types/MainComponents';



export const SlidersContent = memo((props: SliderItems) => {
  const { t } = useTranslation("mainPage")
  const {Img, description, id, title} = props;
  return (
    <div key={`contetn-${id}`}>
      <div className={cls.sliderItem}>
        <img src={Img} alt="test" />
      </div>
      <div className={cls.sliderItemDetailes}>
        <h1 className={cls.header}>{t(title)}</h1>
        <h2 className={cls.description}>{t(description)}</h2>
        <Button
          className={cls.moreBtn}
          theme={ButtonTheme.ORANGE_MIX}
        >
          {t("MORE_DETAILS")}
        </Button>
      </div>
    </div>
  )
});
