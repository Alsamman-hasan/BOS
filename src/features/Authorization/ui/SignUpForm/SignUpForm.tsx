import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./SignUpForm.module.scss";
import { DynamicModuleLoader, ReducersList } from 'shared/lib/componnets/DynamicModuleLoader/DynamicModuleLoader';
import { signUpActions, signUpReducer } from "../../model/slice/signUpSlice";
import { Input } from 'shared/ui/Input/Input';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button } from 'shared/ui/Buttons/Button';
import { ButtonSize } from 'shared/ui/Buttons/types';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
import { useSelector } from 'react-redux';
import { getSignUpData } from '../../model/selectors/getSignUpData';
import { inputCollection } from './constants';
import { Inputparams } from '../../model/types/signUp';
import { P, PTags } from 'shared/ui/Paragraph/P';

export interface SingUpFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  SignUpForm: signUpReducer
}

export const SignUpForm = memo((props: SingUpFormProps) => {
  const { t } = useTranslation("signUpForm")
  const { className } = props;
  const dispatch = useAppDispatch();
  const sinUpData = useSelector(getSignUpData);
  const inputs = useMemo(() => {
    return inputCollection
  }, [inputCollection])

  const disabledBtn = useMemo(() => {
    if (sinUpData?.error) {
      return sinUpData?.error?.length > 0 || false
    }
    return false

  }, [sinUpData?.error])

  const onHandelChange = useCallback(
    (params: Inputparams, value: string) => {
      switch (params) {
        case Inputparams.name:
          dispatch(signUpActions.setName(value));
          break;
        case Inputparams.surName:
          dispatch(signUpActions.setSurName(value));
          break;
        case Inputparams.email:
          dispatch(signUpActions.setEmail(value))
          break;
        case Inputparams.password:
          dispatch(signUpActions.setPassword(value))
          break;
        case Inputparams.confirmPassword:
          dispatch(signUpActions.setConfirmPassword(value));
          break;
        default:
      }
    },
    [dispatch],
  );

  const onChangeConsent = useCallback((value: boolean) => {
    dispatch(signUpActions.setAgreement(value))
  }, [dispatch]);

  const onChangeReceivingEmails = useCallback((value: boolean) => {
    dispatch(signUpActions.setReceivingEmails(value));
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={initialReducers} >
      <div className={classNames(cls.SingUpForm, {}, [className])}>
        {
          sinUpData &&
          inputs.map((input) => (
            <Input
              {...input}
              key={input.label}
              label={`${t(input.label)}`}
              errorMessage={`${t(input.errorMessage)}`}
              className={cls.Input}
              onChange={(value) => onHandelChange(input.name, value)}
              value={sinUpData[input.name] || ""}
            />
          ))
        }
        <Input
          name="CONFIRMPASSWORD"
          label={`${t("CONFIRMPASSWORD")}`}
          required
          pattern={sinUpData?.password}
          type="password"
          errorMessage={`${t("CONFIRM_ERROR")}`}
          className={cls.Input}
          onChange={(value) => onHandelChange(Inputparams.confirmPassword, value)}
          value={sinUpData?.confirmPassword || ""}
        />
        <div className={classNames(cls.checkbox, {}, [cls.Input])}>
          <Checkbox
            label={`${t("CONSENT")}`}
            checked={sinUpData?.dataProcessingAgreement || false}
            onChange={onChangeConsent}
          />
          <Checkbox
            label={`${t("RECEIVE_NEWS")}`}
            checked={sinUpData?.receivingEmails || false}
            onChange={onChangeReceivingEmails}
          />
        </div>
        <Button
          disabled={disabledBtn}
          size={ButtonSize.L}
          className={cls.btn}
        >
          {t("SIGNIN")}
        </Button>
        {disabledBtn && (<P className={cls.error} tage={PTags.P1}> Please enter required values </P>)}
      </div>
    </DynamicModuleLoader>
  )
});
