import React from "react";
import { useSelector } from "react-redux";

const People = () => {
  const users = useSelector((store) => store.Users);
  return (
    <div className="hidden md:flex flex-[1] flex-col h-max gap-2 bg-white border-[1px] border-gray-200 rounded-xl p-3">
      <h1 className="text-lg">People you may know</h1>
      {users.slice(1).map((value, key) => (
        <div
          key={key}
          className="bg-gray-50 h-[40px] rounded-lg flex items-center p-2 gap-2 hover:bg-slate-100 cursor-pointer"
        >
          <div className="w-[30px] h-[30px] border-[1px] rounded-sm">
            <img src={value.profilePictureUrl} alt="ProfilePicture" />
          </div>
          <h1 className="font-medium text-[15px]">{value.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default People;
