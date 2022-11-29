import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import axios from 'axios';
import { counterReducer } from 'entities/Counter';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { userActions, userReducer } from 'entities/User';
import { AuthResponse } from 'features/Authorization';
import { checkAuthPropsReq } from 'features/Authorization/model/services/CheckAuth/checkAuth';
import { NavigateOptions } from "react-router";
import { $api } from "shared/api/api";

import { createReducerManager } from "./reduserManager";
import { StateSchema, ThunkExtraArg } from "./StateSchema";


export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  }

  const reducerManager = createReducerManager(rootReducer);
  const extraArg: ThunkExtraArg = {
    api: $api,
  };
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  })

  // @ts-ignore
  store.reducerManager = reducerManager;

  const refreshToken = localStorage.getItem("refreshToken");
  const { dispatch } = store;
  // if (refreshToken) dispatch(checkAuthPropsReq(refreshToken))
  $api.interceptors.request.use(
    async (config) => {
      const token = localStorage.getItem("accessToken");
      const state = store.getState();
      if (config && config.headers && token && config.url !== "auth/refresh" && refreshToken) {
        config.headers["Authorization"] = `Bearer ${token}`;
        dispatch(checkAuthPropsReq(refreshToken))
      }
      if (token && state.user.isAuth && refreshToken) {
  
        dispatch(checkAuthPropsReq(refreshToken))
        localStorage.clear();
        // dispatch(setLoadingAuthSlice(false));
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  let isRepeate = false;
  $api.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      // const { dispatch } = store;
      const originalRequest = error.config;

      if (originalRequest.url !== "/auth/refresh" && error.response) {
        if (error.response.status === 401 && !isRepeate) {
          isRepeate = true;
          try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (refreshToken) {
              dispatch(checkAuthPropsReq(refreshToken))
            } 
            return $api.request(originalRequest);
          } catch (error) {
            // window.location.href = NoAuthorizedRoutes.WELCOME_ROUTE;
            return Promise.reject(error);
          }
        } else {
          isRepeate = false;
          // dispatch(setAuthLogoutSlice());
          // localStorage.clear();
          // dispatch(setLoadingAuthSlice(false));
        }
      }

      return Promise.reject(error);
    }
  );



  return store;
}

const store = createReduxStore()


export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
