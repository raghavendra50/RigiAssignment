import { configureStore, createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    Users: UsersSlice.reducer,
  },
});

export const Users = UsersSlice.actions;
export default store;
