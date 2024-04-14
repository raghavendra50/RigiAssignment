import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ExpandedPost = () => {
  //the given api "/posts/{id}" can also be used in the useEffect to call the api and get details,
  // but as we have already stored the posts in centralized redux store we can filter out from there redicing api call.

  const { id } = useParams();
  const posts = useSelector((store) => store.Posts);
  const post = posts.data.filter((obj) => obj.id == id)[0];
  return (
    <div className="flex-[2] h-auto bg-white rounded-xl border-[1px] border-gray-200 p-5 overflow-y-auto flex flex-col items-center">
      {/* header */}
      <div className="w-full flex items-center gap-3">
        <div className="w-[40px] h-[40px]">
          <img
            src={post["author"].profilePictureUrl}
            alt="ProfilePicture"
            className="rounded-full"
          />
        </div>
        <h1 className="font-medium text-[15px]">{post["author"].name}</h1>
      </div>
      <div className="w-full text-wrap">
        <h1 className="text-[15px]">{post["text"]}</h1>
        {/* MediaContainer */}
        {post["attachments"].length != 0 && (
          <div className="flex flex-col">
            {post["attachments"].map((item, index) => (
              <div className={`h-[200px] m-1`} key={index}>
                {item.type == "image" ? (
                  <img
                    src={item.url}
                    alt="Image"
                    className="w-full h-full object-fill rounded-md"
                  />
                ) : (
                  <video
                    className="w-full h-full object-fill rounded-md"
                    autoPlay
                    muted
                  >
                    <source src={item.url} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full border-b-[1px] mt-4"></div>
      <h1 className="text-xs items-center mt-2 text-gray-400">End</h1>
    </div>
  );
};

export default ExpandedPost;
