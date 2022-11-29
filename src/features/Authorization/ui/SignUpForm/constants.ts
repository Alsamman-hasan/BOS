import { Inputparams } from 'features/Authorization/model/types/signUp';
import { HTMLInputTypeAttribute } from 'react';


export interface InputsItems {
  label: string;
  name: Inputparams;
  required?: boolean;
  type: HTMLInputTypeAttribute;
  errorMessage: string;
  pattern?: string;
  onChange?: (value: string) => void;
}

export const inputCollection: InputsItems[] = [
  {
    name: Inputparams.name,
    label: "NAME",
    required: true,
    type: "text",
    errorMessage: "NAME_ERROR",
    pattern: "^[A-Za-z0-9]{3,16}$",
  },
  {
    name: Inputparams.surName,
    label: "SURNAME",
    required: false,
    type: "text",
    errorMessage: "SURNAME_ERROR",
  },
  {
    name: Inputparams.email,
    label: "EMAIL",
    required: true,
    type: "email",
    errorMessage: "EMAIL_ERROR",
  },
  {
    name: Inputparams.password,
    label: "PASSWORD",
    required: true,
    type: "password",
    errorMessage: "PASSWORD_ERROR",
    pattern: "^[A-Za-z0-9]{3,16}$"
  },
]