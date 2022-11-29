import { memo } from "react";
import { Button } from 'shared/ui/Buttons/Button';
import { ButtonTheme } from 'shared/ui/Buttons/types';
import NavLeftIcon from "shared/assets/icons/navLeft.svg"
import NavRightIcon from "shared/assets/icons/navRight.svg"


export interface NavButtonProps {
  onClick: any;
  next: boolean;
  prev: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const NavRightMemo = memo(() => <NavRightIcon />)
const NavLeftMemo = memo(() => <NavLeftIcon />)

export const NavButton = (props: NavButtonProps) => {
  const { onClick, next, prev, className, style } = props;
  return (
    <Button
      onClick={onClick}
      className={className}
      style={style}
      theme={ButtonTheme.CLEAR}
    >
      {next && <NavRightMemo />}
      {prev && <NavLeftMemo />}
    </Button>
  )
};