import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from 'app/providers/StorProvider';
import { userActions } from 'entities/User';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY, REFRESH_TOKEN_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { AuthResponse } from '../../types/Login';


interface LoginProps {
  email: string;
  password: string;
}

export const loginReq = createAsyncThunk<
  AuthResponse,
  LoginProps,
  ThunkConfig<string>
>(
  "login/login",
  async (authData, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<AuthResponse>("auth/login", authData);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_KEY, response.data.accessToken);
      localStorage.setItem(REFRESH_TOKEN_LOCALSTORAGE_KEY, response.data.refreshToken);
      dispatch(userActions.setAuthData(response.data.user));
      dispatch(userActions.setAuth(true));
      return response.data;
    } catch (e) {
      dispatch(userActions.setAuth(false));
      return rejectWithValue("error");
    }
  },
);