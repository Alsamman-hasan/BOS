import { classNames, Mods } from "shared/lib/classNames/classNames";
import { memo, MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import cls from "./HeaderSecondLine.module.scss";
import BosLogo from "shared/assets/icons/logo_bos.svg";
import { CatalogMenu, SearchInput } from 'entities/headersEntities';
import ProfileIcon from "shared/assets/icons/profile.svg";
import FavoriteIcon from "shared/assets/icons/Favorite.svg";
import BasketIcon from "shared/assets/icons/basket.svg";
import { Button } from 'shared/ui/Buttons/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Buttons/types';
import { LoginModal } from 'features/Authorization';
import { BadgeUI } from 'shared/ui/Badge/Badge';
import { Layout } from 'shared/ui/Layout/Layout';
import { Wrapper } from 'shared/ui/Wrapper/Wrapper';
import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';

export interface HeaderSecondLineProps {
  className?: string;
}
const FavoriteIconMemo = memo(() => <FavoriteIcon />)
const ProfileIconMemo = memo(() => <ProfileIcon />)
const BasketIconMemo = memo(() => <BasketIcon />)
const BosLogoMemo = memo(() => <BosLogo />)
const isAuth = true;

export const HeaderSecondLine = memo((props: HeaderSecondLineProps) => {
  const { className } = props;
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAuthModal, setIsAuthModal] = useState(false);
  const auth = useSelector(getUserAuthData);
  const handleSize = useCallback(() => setIsScrolling(Boolean(window.pageYOffset > 10)), []);

  const badgeContent = useMemo(() => {
    return 2
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleSize);
    return () => window.removeEventListener("scroll", handleSize);
  }, [handleSize]);


  const onClose = useCallback(() => {
    setIsAuthModal(false)
  }, []);

  const onShowModal = useCallback(() => {
    if(!auth.isAuth) {
      setIsAuthModal(true)
    } 
    console.log(">>>>>");
    
  }, [auth]);

  return (
    <Wrapper className={classNames(cls.Wrapper, { [cls.isScroll]: isScrolling }, [className])}>
      <Layout>
        <div className={classNames(cls.HeaderSecondLine)}>
          <BosLogoMemo />
          <CatalogMenu />
          <SearchInput />
          <div className={cls.IconsWrapper}>
            <Button
              theme={ButtonTheme.CLEAR}
              className={cls.btnIcons}
              circle
              onClick={onShowModal}
            >
              <ProfileIconMemo />
            </Button>
            {isAuthModal && <LoginModal
              isOpen={isAuthModal}
              onClose={onClose}
            />}
            <Button
              disabled={!isAuth}
              size={ButtonSize.S}
              theme={ButtonTheme.CLEAR}
              className={cls.btnIcons}
              circle
            >
              <BadgeUI badgeContent={badgeContent}>
                <FavoriteIconMemo />
              </BadgeUI>
            </Button>
            <Button
              disabled={!isAuth}
              size={ButtonSize.S}
              theme={ButtonTheme.CLEAR}
              className={cls.btnIcons}
              circle
            >
              <BadgeUI className={cls.Badge} badgeContent={badgeContent}>
                <BasketIconMemo />
              </BadgeUI>
            </Button>
          </div>
        </div>
      </Layout>
    </Wrapper>
  )
});
