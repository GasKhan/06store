import { UserState } from '@/types/UserState';
import { Action, PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserState = null;

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {
    setUser(state, action: { type: string; payload: UserState }) {
      return (state = action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
