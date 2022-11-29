import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from 'app/providers/StorProvider';
import { userActions } from 'entities/User';
import { ACCESS_TOKEN_LOCALSTORAGE_KEY, REFRESH_TOKEN_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { AuthResponse } from '../../types/Login';


export const checkAuthPropsReq = createAsyncThunk<
  AuthResponse,
  string,
  ThunkConfig<string>
>(
  "checkAuth/refresh",
  async (refreshToken, { dispatch, extra, rejectWithValue }) => {
    try {
      const response = await extra.api.post<AuthResponse>("auth/refresh", {}, 
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_KEY, response.data.accessToken);
      localStorage.setItem(REFRESH_TOKEN_LOCALSTORAGE_KEY, response.data.refreshToken);
      console.log(">>>>");
      dispatch(userActions.setAuthData(response.data.user));
      dispatch(userActions.setAuth(true));
      return response.data;
    } catch (e) {
      dispatch(userActions.setAuth(false));
      return rejectWithValue("error");
    }
  },
);