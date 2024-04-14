import React, { useEffect, useState } from "react";
import Thumbnail from "../../assets/Thumbnail.png";
import MagnifyingGlass from "../../assets/MagnifyingGlass.png";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../../../config";
import { useDispatch } from "react-redux";
import { QueriedPosts } from "../../reduxStore";
import Switch from "../Switch/Switch";

const Header = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const getQueriedPosts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts?query=${query}`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      dispatch(QueriedPosts.setQueriedPosts({ data: response.data }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const delay = 1000;
    const debounce = setTimeout(() => {
      query !== ""
        ? getQueriedPosts()
        : dispatch(QueriedPosts.setQueriedPosts({}));
    }, delay);
    return () => {
      clearTimeout(debounce);
    };
  }, [query]);
  return (
    <header className="w-[100%] h-auto p-5 box-border bg-white dark:bg-slate-800 flex relative items-center justify-between border-b-[1px] dark:border-orange-500">
      <div className="w-[40px] h-[40px] bg-black rounded-md">
        <img
          src={Thumbnail}
          alt="Thumbnail"
          className="w-full h-full object-contain cursor-pointer"
        />
      </div>
      <div className="flex-1 h-full flex items-center justify-end sm:justify-center gap-2">
        <div className="w-[250px] sm:w-[400px] h-[40px] relative">
          <div className="w-[30px] h-[30px] absolute top-1 right-3">
            <img
              src={MagnifyingGlass}
              alt="Thumbnail"
              className="w-full h-full object-contain cursor-pointer"
            />
          </div>
          <input
            type="text"
            className="w-full h-full rounded-full bg-slate-100 outline-none p-3 text-lg font-medium"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Switch />
      </div>
    </header>
  );
};

export default Header;
