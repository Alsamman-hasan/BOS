import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { validatorEmail } from 'shared/lib/validator/validationEmail'
import { SignUpSchema } from '../types/signUp'
// import { loginByUsername } from "../services/loginByUserName/loginByUserName"



const initialState: SignUpSchema = {
  isLoading: false,
  password: "",
  confirmPassword: "",
  email: "",
  name: '',
  surName: "",
  error: [],
  dataProcessingAgreement: false,
  receivingEmails: false
}

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => {
      const isValidEmail = validatorEmail(payload)
      state.email = payload
      !isValidEmail
        ? state.error?.push("It should be a valid email address!")
        : state.error?.splice(state.error?.indexOf("It should be a valid email address!", 1))
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload
      payload.length < 3
        ? state.error?.push("It should be a valid password")
        : state.error?.splice(state.error?.indexOf("It should be a valid password", 1))
    },

    setConfirmPassword: (state, { payload }: PayloadAction<string>) => {
      state.confirmPassword = payload;
      state.password !== payload
        ? state.error?.push("Passwords don't match!")
        : state.error?.splice(state.error?.indexOf("Passwords don't match!", 1))
    },
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload
      payload.length < 3
        ? state.error?.push("It should be a valid name")
        : state.error?.splice(state.error?.indexOf("It should be a valid name", 1))
    },
    setSurName: (state, { payload }: PayloadAction<string>) => {
      state.surName = payload
    },
    setAgreement: (state, { payload }: PayloadAction<boolean>) => {
      state.dataProcessingAgreement = payload
      // !payload && state.error?.push("test");
    },
    setReceivingEmails: (state, { payload }: PayloadAction<boolean>) => {
      state.receivingEmails = payload
    },

  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     })
  // },
})

export const { actions: signUpActions } = signUpSlice
export const { reducer: signUpReducer } = signUpSlice