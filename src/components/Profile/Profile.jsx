import { useSelector } from "react-redux";
import Thumbnail from "../../assets/Thumbnail.png";

const Profile = () => {
  const users = useSelector((store) => store.Users);
  return (
    <div
      className="hidden lg:flex flex-col flex-[1] h-max items-center justify-center bg-white border-[1px] border-gray-200 rounded-xl py-5 gap-4
    dark:bg-slate-400 dark:text-slate-900"
    >
      {users.length != 0 && (
        <>
          <div className="w-[100px] h-[100px] bg-black rounded-xl">
            <img
              src={Thumbnail}
              alt="UserProfilePicture"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] border-[1px] rounded-sm">
              <img
                src={users[0].profilePictureUrl}
                alt="UserProfilePicture"
                className="w-full"
              />
            </div>
            <h1 className="font-semibold text-[15px]">{users[0].name}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
