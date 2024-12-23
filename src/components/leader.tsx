import { ILeader } from "@/types";
import { FC } from "react";

const Leader: FC<ILeader> = ({
  id,
  avatar_thumbnail,
  avatar,
  nickname,
  position,
  experience_earned,
}) => {
  return (
    <div
      id="leader"
      key={id}
      className="flex justify-between items-center bg-ComponentDarkGrey w-full h-32 px-8 mb-8 bg-gray-50"
    >
      <div className="h-full w-3/4 flex justify-start items-center [&>*]:mr-8">
        <p>{position}</p>
        <img
          src={avatar_thumbnail || avatar || "./avatar.jpg"}
          alt="avatar"
          className="h-3/4 rounded-full"
        />
        <p>{nickname}</p>
      </div>
      <p className="w-1/4 flex justify-end">
        {experience_earned.toLocaleString()} HP
      </p>
    </div>
  );
};

export default Leader;
