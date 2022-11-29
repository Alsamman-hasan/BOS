import {createReduxStore } from 'app/providers/StorProvider';
import axios from "axios";

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: any;
}

export const $api = axios.create({
  baseURL: __API__,
});

// const store = createReduxStore();







