import Feed from "./components/Feed/Feed";
import Header from "./components/Header/Header";
import People from "./components/People/People";
import Profile from "./components/Profile/Profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../config";
import { Users } from "../src/reduxStore/index";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${API_BASE_URL}/users`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      dispatch(Users.setUsers(response.data));
    };
    getUser();
  }, []);
  return (
    <div className="w-[100%] h-screen flex flex-col items-center bg-slate-50 gap-2">
      <Header />
      <div className="w-[100%] lg:w-[1000px] flex-1 flex gap-3">
        <Profile />
        <Feed />
        <People />
      </div>
    </div>
  );
};

export default App;
