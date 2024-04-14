import { useNavigate } from "react-router-dom";

const Post = ({ index, size, attachments, author, id, text }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-max flex flex-col gap-3 bg-transparent p-5 hover:bg-slate-100 rounded-lg hover:shadow-md dark:hover:bg-slate-900 dark:text-slate-900 dark:hover:text-slate-300 "
      ref={size}
      data-index={index}
      onClick={() => navigate(`/post/${id}`)}
    >
      {/* header */}
      <div className="w-full flex items-center gap-3">
        <div className="w-[40px] h-[40px]">
          <img
            src={author.profilePictureUrl}
            alt="ProfilePicture"
            className="rounded-full"
          />
        </div>
        <h1 className="font-medium text-[15px]">{author.name}</h1>
      </div>
      {/* Content */}
      <div className="w-full text-wrap">
        <h1 className="text-[15px]">{text}</h1>
        {/* MediaContainer */}
        {attachments.length != 0 && (
          <div className="grid grid-flow-row grid-rows-auto grid-cols-2">
            {attachments.map((item, index) => (
              <div
                className={`h-[200px] m-1 ${
                  attachments.length % 2 != 0 &&
                  attachments.length == index + 1 &&
                  "col-span-2"
                }`}
                key={index}
              >
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
    </div>
  );
};

export default Post;
