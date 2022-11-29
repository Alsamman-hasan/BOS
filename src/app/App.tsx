import { getUserInited, userActions } from 'entities/User';
import { checkAuthPropsReq } from 'features/Authorization/model/services/CheckAuth/checkAuth';
import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch/AppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import AppRouter from './providers/router/ui/AppRouter.tsx';

export const App = memo(() => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  useInitialEffect(() => {
    dispatch(userActions.initAuthData())
    const refresh = localStorage.getItem("refreshToken"); 
    // if (refresh) dispatch(checkAuthPropsReq(refresh))
  })

  return (
    <div className={classNames("app", {}, ["app_light_theme"])}>
      <Suspense fallback="">
        <Header className='header'/>
        <div className="main">
          {inited && <AppRouter/> }
        </div>
        <Footer className='footer'/>
      </Suspense>
    </div>
  )
});