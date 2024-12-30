import { ILeader } from "@/types";
import Image from "next/image";
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
      className="flex justify-between items-center bg-ComponentDarkGrey h-[200px] px-8 mb-8 bg-gray border-green border-[2px] shadow-greenShadow rounded-[20px]"
    >
      <div className="h-full w-3/4 flex justify-start items-center [&>*]:mr-8">
        <p>{position}</p>
        <div className=" rounded-full border-green border-[2px] overflow-hidden">
          <Image
            src={avatar_thumbnail || avatar || "/images/avatar.jpg"}
            alt="avatar"
            width={160}
            height={160}
          />
        </div>

        <p>{nickname}</p>
      </div>
      <div className="flex items-center gap-10">
        <Image src={"/images/HC_Icon.png"} alt="coin" width={48} height={48} />
        <p className=" text-[55px]">{experience_earned.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Leader;
