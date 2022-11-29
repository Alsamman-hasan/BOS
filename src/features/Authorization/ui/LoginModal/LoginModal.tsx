import { classNames } from "shared/lib/classNames/classNames";
import { memo, Suspense, useMemo } from "react";
import cls from "./LoginModal.module.scss";
import { CustomModal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginFrom/LoginForm.async';
import { Tabs } from 'shared/ui/Tabs';
import { SignUpForm } from '../SignUpForm/SignUpForm';

export interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  const tabs = useMemo(
    () => [
      {
        tab: "ВХОД",
        element: <LoginFormAsync onSuccess={onClose} />
      },
      {
        tab: "РЕГИСТРАЦИЯ",
        element: <SignUpForm />
      },
    ],
    []
  );
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.LoginModal, {}, [className])}
      lazy
    >
      <div className={cls.modalWrapper} >
        <Suspense fallback={<Loader />}>
          <Tabs className={cls.tab} tabs={tabs}/>
        </Suspense>
      </div>
    </CustomModal>
  )
});
