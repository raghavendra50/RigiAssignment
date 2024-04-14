import axios from "axios";
import { useEffect, useRef } from "react";
import { API_BASE_URL, API_KEY } from "../../../config";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useDispatch, useSelector } from "react-redux";
import { Posts } from "../../reduxStore";
import Post from "./Post";

const Feed = () => {
  const dispatch = useDispatch();
  const QueriedPosts = useSelector((store) => store.QueriedPosts);
  const posts = useSelector((store) => store.Posts);
  const feedPosts =
    Object.keys(QueriedPosts).length === 0 ? posts : QueriedPosts;
  const count = Object.keys(feedPosts.data || {}).length;
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
      className="flex-[2] h-auto bg-white rounded-xl border-[1px] border-gray-200 p-2 overflow-y-auto dark:bg-slate-400"
      ref={parentElement}
    >
      <div className={`w-full relative h-[${virtualizer.getTotalSize()}px]`}>
        <div
          className={`w-full absolute top-0 left-0 translate-y-[${items.start}px] flex flex-col gap-3`}
        >
          {items.length != 0 ? (
            items.map((item, index) => (
              <Post
                key={index}
                index={index}
                size={virtualizer.measureElement}
                attachments={feedPosts.data[item.index]["attachments"]}
                author={feedPosts.data[item.index]["author"]}
                id={feedPosts.data[item.index]["id"]}
                text={feedPosts.data[item.index]["text"]}
              />
            ))
          ) : (
            <div className="w-full h-[500px] flex items-center justify-center">
              <h1 className="text-gray-500 font-semibold text-lg">No Posts</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
