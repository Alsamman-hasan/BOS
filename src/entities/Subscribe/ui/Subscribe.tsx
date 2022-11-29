import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./Subscribe.module.scss";
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Buttons/Button';
import { ButtonSize } from 'shared/ui/Buttons/types';

export interface SubscribeProps {
  className?: string;
}

export const Subscribe = memo((props: SubscribeProps) => {
  const { t } = useTranslation()
  const { className } = props;
  return (
    <div className={classNames(cls.Subscribe, {}, [className])}>
      <Input
        className={cls.input}
        name="subscribe"
        placeholder="Email"
        type="email"
        errorMessage='It should be a valid email address!'
      />
      <Button className={cls.Btn}>
          Subscribe
      </Button>
    </div>
  )
});
