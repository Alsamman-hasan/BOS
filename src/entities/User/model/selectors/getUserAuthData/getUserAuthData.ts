import { StateSchema } from 'app/providers/StorProvider';

export const getUserAuthData = (state: StateSchema) => state.user;