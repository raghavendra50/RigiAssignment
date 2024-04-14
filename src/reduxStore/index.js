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
  initialState: {},
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});

const QueriedPostsSlice = createSlice({
  name: "QueriedPosts",
  initialState: {},
  reducers: {
    setQueriedPosts: (state, action) => {
      return action.payload;
    },
  },
});

const DarkModeSlice = createSlice({
  name: "DarkMode",
  initialState: false,
  reducers: {
    setDarkMode: (state, action) => {
      return action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    Users: UsersSlice.reducer,
    Posts: PostsSlice.reducer,
    QueriedPosts: QueriedPostsSlice.reducer,
    DarkMode: DarkModeSlice.reducer,
  },
});

export const Users = UsersSlice.actions;
export const Posts = PostsSlice.actions;
export const QueriedPosts = QueriedPostsSlice.actions;
export const DarkMode = DarkModeSlice.actions;
export default store;
