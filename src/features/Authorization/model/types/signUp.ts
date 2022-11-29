export interface SignUpSchema {
  name: string;
  surName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLoading: boolean;
  error?: string[];
  dataProcessingAgreement? :boolean;
  receivingEmails?: boolean;
}

export enum Inputparams {
  "name" = "name",
  "email" = "email",
  "surName" = "surName",
  "password" ="password",
  "confirmPassword" = "confirmPassword"
}