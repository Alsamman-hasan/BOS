import { classNames } from "shared/lib/classNames/classNames";
import { memo, useMemo } from "react";
import cls from "./MainSlider.module.scss";
import Carousel from "react-material-ui-carousel";
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import { NavButton } from './NavButton';
import { items } from '../../model/sliderItems';
import { SlidersContent } from './SlidersContent';


// need some modifications to be able to reuse this component !!!!!

export interface MainSliderProps {
  className?: string;
}

export const MainSlider = memo((props: MainSliderProps) => {
  const { className } = props;
  const images = useMemo(() => items, [])

  return (
    <Wrapper>
      <Carousel
        className={classNames(cls.MainSlider, {}, [className])}
        autoPlay={true}
        navButtonsProps={{ className: cls.navBtn }}
        navButtonsWrapperProps={{ className: cls.navButtonsWrapper }}
        index={0}
        duration={500}
        animation="fade"
        NavButton={NavButton}
        IndicatorIcon={<span />}
        indicatorIconButtonProps={{ className: cls.indicatorIcon }}
        activeIndicatorIconButtonProps={{ className: cls.indicatorActiveIcon }}
        indicatorContainerProps={{ className: cls.indicatorContainer }}
      >
        {images.map(({Img, description, id, title}) => (
          <SlidersContent
            Img={Img}
            description={description}
            id={id}
            title={title}
            key={id}
          />
        ))}
      </Carousel>
    </Wrapper>
  )
});
