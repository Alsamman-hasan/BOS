import { User } from 'entities/User/model/types/user';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}


export interface LoginSchema {
  email: string;
  password: string;
  isLoading: boolean;
  error?: string;
  isRemember?: boolean;
}