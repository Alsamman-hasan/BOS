import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthResponse } from 'features/Authorization';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

// import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { User, UserSchema } from "../types/user"

const initialState: UserSchema = {
  isAuth: false,
  _inites: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._inites = true;
    },
    setAuth: (state, { payload }: PayloadAction<any>) => {
      state.isAuth = payload;
    },
    logout: (state) => {
      state.authData = undefined;
      // localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice