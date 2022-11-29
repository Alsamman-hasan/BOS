import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next"
import cls from "./LangSwitcher.module.scss";
import { Button } from '../Buttons/Button';
import { Menu, MenuItem } from '@mui/material';
import { ButtonTheme } from '../Buttons/types';
import { Htag, HTypes } from '../Htage/Htage';
import ExpandMore from "../../assets/icons/ExpandMore.svg";

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()
  const { className } = props;
  const [lang, setLang] = useState<string>("en");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setLang(lang);
    i18n.changeLanguage(lang);
  }, [i18n]);

  const handleClose = async (lang: string) => {
    if (lang.length) {
      setLang(lang);
      i18n.changeLanguage(lang);
    }

    setAnchorEl(null);
  };

  return (
    <div className={cls.switcher}>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose("")}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        className={cls.langMenu}
      >
        <MenuItem
          onClick={() => handleClose("en")}
          className={cls.langMenuItem}
        >
          <span
            className={cls["en"]}
          />
          <Htag
            tage={HTypes.H4}
            className={cls.langMenuSpan}
          >
            eng
          </Htag>
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("ru")}
          className={cls.langMenuItem}
        >
          <span
            className={cls["ru"]}
          />
          <Htag
            tage={HTypes.H4}
            className={cls.langMenuSpan}
          >
            rus
          </Htag>
        </MenuItem>
      </Menu>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        theme={ButtonTheme.CLEAR}
        onClick={handleClick}
        className={cls.btn}
      >
        <div className={cls.btnWrapper}>
          <span
            className={cls[lang]}
          />
          <Htag tage={HTypes.H4} className={cls.langSpan}>
            {lang}
          </Htag>
          <ExpandMore />
        </div>
      </Button>
    </div>
  )
});


