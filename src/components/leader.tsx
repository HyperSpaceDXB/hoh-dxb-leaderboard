import { ILeader } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { franc } from "franc";

const Leader: FC<ILeader> = ({
  id,
  avatar_thumbnail,
  avatar,
  nickname,
  position,
  experience_earned,
}) => {
  const lang = franc(nickname);
  return (
    <div className="font-PPMon flex justify-between items-center w-full h-20 bg-gradient-to-r from-black to-black/55 rounded-full px-8">
      <div className="flex items-center gap-4">
        <p className="text-3xl">{position}.</p>
        <div className=" rounded-full border-green border-[2px] overflow-hidden">
          <Image
            src={avatar_thumbnail || avatar || "/images/avatar.jpg"}
            alt="avatar"
            width={56}
            height={56}
          />
        </div>
        <p
          className={`text-3xl ${lang === "arb" ? "font-geSS" : "font-PPMon"}`}
        >
          {nickname}
        </p>
      </div>
      <div className="flex  w-52 justify-between">
        <Image src={"/images/HC_Icon.png"} alt="coin" width={36} height={24} />
        <p className=" text-3xl">{experience_earned.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Leader;
