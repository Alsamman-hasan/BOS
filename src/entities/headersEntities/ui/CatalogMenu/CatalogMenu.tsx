import { memo, MouseEvent, useState } from 'react';
import GatalogIcon from "shared/assets/icons/GroupCatalog.svg";
import './catalogMenu.scss'
import { data, subData } from './data'
import { Menu, MenuItem } from '@mui/material';
import { Button } from 'shared/ui/Buttons/Button';
import { Htag, HTypes } from 'shared/ui/Htage/Htage';
import { ButtonTheme } from 'shared/ui/Buttons/types';
import { P, PTags } from 'shared/ui/Paragraph/P';
import { Portal } from 'shared/ui/Portal/Portal';


export const CatalogMenu = memo(() => {
  // const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };

  const onHandleCatalog = () => {
    // history.push("/catalogs/second-Level");
    setAnchorEl(null);
  }

  const onChoose = () => {
    // history.push("/catalogs");
    setAnchorEl(null);
  }

  return (
    <div className='menu'>
      <Button
        theme={ButtonTheme.CLEAR}
        aria-haspopup="true"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="menuBtn"
      >
        <GatalogIcon />
        <Htag tage={HTypes.H2}> CATALOG</Htag>
      </Button>
      <Portal>
        <Menu
          className="menuBlock"
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          onClose={handleClose}
        >
          <div className='menuContainer'>
            <div className='menuMain'>
              {
                data.map((item) => (
                  <div key={item.id} className='menuMainItems'>
                    <MenuItem onClick={onHandleCatalog}>
                      <Htag className="menuMainItem" tage={HTypes.H3}> {item.name}</Htag>
                    </MenuItem>
                    <hr />
                  </div>
                ))
              }
            </div>
            <div className='menuSubMain'>
              <div className='menuSubMainGroup'>
                {
                  subData.map((el) => (
                    <div className='menuSubMainItems' key={el.id}>
                      <Htag tage={HTypes.H3} > {el.name}</Htag>
                      {el.items.map((item) => (
                        <div key={item.id} className='menuSubMainItemWrapper' >
                          <MenuItem onClick={onChoose}>
                            <P className='menuSubMainItem' tage={PTags.P2} > {item.name}</P>
                          </MenuItem>
                        </div>
                      ))}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </Menu >
      </Portal>
    </div >
  );
})