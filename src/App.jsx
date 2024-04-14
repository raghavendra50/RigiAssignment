import Header from "./components/Header/Header";
import People from "./components/People/People";
import Profile from "./components/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../config.js";
import { Users } from "../src/reduxStore/index";
import { Outlet } from "react-router-dom";
const App = () => {
  const darkMode = useSelector((store) => store.DarkMode);
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/users`, {
          headers: {
            Authorization: API_KEY,
          },
        });
        dispatch(Users.setUsers(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  return (
    <div
      className={`${
        darkMode && "dark"
      } w-[100%] h-screen flex flex-col items-center bg-slate-50 gap-3 dark:bg-slate-800`}
    >
      <Header />
      <div className="w-[100%] lg:w-[1000px] flex-1 flex gap-3 ">
        <Profile />
        <Outlet />
        <People />
      </div>
    </div>
  );
};

export default App;
