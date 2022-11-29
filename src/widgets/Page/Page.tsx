
import { CSSProperties, memo, MutableRefObject, ReactNode, useRef } from "react";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from "./Page.module.scss";
// import { useInfiniteScroll } from "../../lib/hooks/useInfiniteScroll/useInfiniteScroll";

export interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
  style?: CSSProperties;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd, style } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  // useInfiniteScroll({
  //   triggerRef,
  //   wrapperRef,
  //   callback: onScrollEnd,
  // });
  return (
    <section
      style={style}
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
});