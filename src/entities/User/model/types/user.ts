import { AuthResponse } from 'features/Authorization';

export interface User {
  addresses: string[];
  cart_count: number;
  date_birth: Date;
  email: string;
  favorites_count: number;
  gender: string;
  middleName: string;
  name: string;
  phone: string;
  surName: any;
}

export interface UserSchema {
  isAuth: boolean;
  _inites: boolean;
  authData?: User;
}