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

const PostsSlice = createSlice({
  name: "Posts",
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    Users: UsersSlice.reducer,
    Posts: PostsSlice.reducer,
  },
});

export const Users = UsersSlice.actions;
export const Posts = PostsSlice.actions;
export default store;
