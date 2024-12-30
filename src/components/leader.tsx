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
    <div
      id="leader"
      key={id}
      className="flex justify-between items-center w-[1680px] h-[200px] px-20 bg-gray border-green border-[2px] shadow-greenShadow rounded-[20px]"
    >
      <div className="h-full flex justify-start gap-[50px] items-center">
        <p className="text-[50px]">{position}.</p>
        <div className=" rounded-full border-green border-[2px] overflow-hidden">
          <Image
            src={avatar_thumbnail || avatar || "/images/avatar.jpg"}
            alt="avatar"
            width={160}
            height={160}
          />
        </div>

        <p
          className={`text-[50px] ${
            lang === "arb" ? "font-geSS" : "font-PPMon"
          }`}
        >
          {nickname}
        </p>
      </div>
      <div className="flex items-center gap-10">
        <Image src={"/images/HC_Icon.png"} alt="coin" width={48} height={48} />
        <p className=" text-[50px]">{experience_earned.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Leader;
