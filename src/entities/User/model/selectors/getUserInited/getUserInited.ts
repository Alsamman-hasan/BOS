import { StateSchema } from 'app/providers/StorProvider';

export const getUserInited = (state: StateSchema) => state.user._inites;