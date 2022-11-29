import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next"
import cls from "./LoginForm.module.scss";
import { Input } from 'shared/ui/Input/Input';
import { Checkbox } from 'shared/ui/Checkbox/Checkbox';
import { Button } from 'shared/ui/Buttons/Button';
import { ButtonSize } from 'shared/ui/Buttons/types';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/componnets/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from 'features/Authorization/model/slice/LoginSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
import { getLoginData } from '../../model/selectors/getLogin';
import { P, PTags } from 'shared/ui/Paragraph/P';
import { Htag, HTypes } from 'shared/ui/Htage/Htage';
import { loginReq } from 'features/Authorization/model/services/Login/login';

export interface LoginFormProps {
	className?: string;
	onSuccess : () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
}

const LoginForm = memo((props: LoginFormProps) => {
	const { t } = useTranslation("loginForm");
	const { className, onSuccess } = props;
	const dispatch = useAppDispatch();
	const loginData = useSelector(getLoginData);

	const disabledBtn = useMemo(() => {
		return (!loginData?.email || !loginData?.password || !!loginData?.error)
	}, [loginData?.email, loginData?.password, loginData?.error])

	const onChangeEmail = useCallback((value: string) => {
		dispatch(loginActions.setEmail(value))
	}, [dispatch])

	const onChangePassword = useCallback((value: string) => {
		dispatch(loginActions.setPassword(value))
	}, [dispatch])

	const onRemember = useCallback((value: boolean) => {
		dispatch(loginActions.setIsRemmeber(value))
	}, [dispatch])

	const onLoginClick = useCallback(async () => {
		if (loginData) {
			const result = await dispatch(loginReq({ email: loginData?.email, password: loginData?.password }));
			if (result.meta.requestStatus === "fulfilled") {
				onSuccess();
			}
		}
		
	}, [dispatch, loginData?.email, loginData?.password]);

	return (
		<DynamicModuleLoader reducers={initialReducers} >
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Input
					label='Email'
					name="Email"
					required
					type="email"
					errorMessage='It should be a valid email address!'
					className={cls.Input}
					onChange={onChangeEmail}
					value={loginData?.email || ""}
				/>
				<Input
					name="password-login"
					label={`${t("Пароль")}` || ""}
					required
					type="password"
					errorMessage='Please put your password'
					className={cls.Input}
					onChange={onChangePassword}
					value={loginData?.password || ""}
				/>
				<div className={classNames(cls.checkbox, {}, [cls.Input])}>
					<Checkbox
						label='Запомнить меня'
						checked={loginData?.isRemember || false}
						onChange={onRemember}
					/>
					<Htag tage={HTypes.H5}>
						{t("FORGOT_PASSWORD")}
					</Htag>
				</div>
				<Button
					onClick={onLoginClick}
					disabled={disabledBtn}
					size={ButtonSize.L}
					className={cls.btn}
				>
					{t("SIGNIN")}
				</Button>
				{loginData?.error && (<P className={cls.error} tage={PTags.P1}> {loginData?.error} </P>)}
			</div>
		</DynamicModuleLoader>
	)
});

export default LoginForm;
