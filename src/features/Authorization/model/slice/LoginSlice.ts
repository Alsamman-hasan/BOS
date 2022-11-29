import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { validatorEmail } from 'shared/lib/validator/validationEmail'
import { loginReq } from '../services/Login/login'
import { LoginSchema } from '../types/Login'



const initialState: LoginSchema = {
  isLoading: false,
  password: "",
  email: "",
  error: "",
  isRemember : false
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => {
      const isValidEmail = validatorEmail(payload)
      state.email = payload
      state.error = !isValidEmail ? "It should be a valid email address!" : ""
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.error = "";
      state.password = payload
    },
    setIsRemmeber: (state, { payload }: PayloadAction<boolean>) => {
      state.isRemember = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginReq.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginReq.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginReq.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice