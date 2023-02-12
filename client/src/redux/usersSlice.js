import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: null,
  },
  reducers: {
    SetUsers: (state, action) => {
      state.users = action.payload;
    },
    SetUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { SetUsers, SetUser } = usersSlice.actions;
