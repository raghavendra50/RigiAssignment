import axios from "axios";
import { useEffect, useRef } from "react";
import { API_BASE_URL, API_KEY } from "../../../config";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../reduxStore";
import Post from "./Post";

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.Posts);
  const count = Object.keys(posts.data || {}).length;
  const parentElement = useRef();
  const virtualizer = useVirtualizer({
    count,
    getScrollElement: () => parentElement.current,
    estimateSize: () => 100,
    overscan: count,
  });
  const items = virtualizer.getVirtualItems();

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(`${API_BASE_URL}/posts`, {
        headers: {
          Authorization: API_KEY,
        },
      });
      dispatch(Posts.setPosts(response.data));
    };
    getPosts();
  }, []);
  return (
    <div
      className="flex-[2] h-auto bg-white rounded-xl border-[1px] border-gray-200 p-2 overflow-y-auto"
      ref={parentElement}
    >
      <div className={`w-full relative h-[${virtualizer.getTotalSize()}px]`}>
        <div
          className={`w-full absolute top-0 left-0 translate-y-[${items.start}px] flex flex-col gap-3`}
        >
          {items.map((item, index) => (
            <Post
              key={index}
              index={index}
              size={virtualizer.measureElement}
              attachments={posts.data[item.index]["attachments"]}
              author={posts.data[item.index]["author"]}
              id={posts.data[item.index]["id"]}
              text={posts.data[item.index]["text"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
