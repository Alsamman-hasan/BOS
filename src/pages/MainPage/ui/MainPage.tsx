import { Advantages, MainSlider, Promotions } from 'entities/MainComponents';;
import { memo, } from "react";
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import cls from "./mainPage.module.scss";

const MainPage = memo((props: any) => {
  return (
    <Wrapper>
      <MainSlider/>
      <Advantages/>
      <Promotions/>
    </Wrapper>
  )
})

export default MainPage;