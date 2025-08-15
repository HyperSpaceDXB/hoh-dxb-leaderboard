import { ILeader } from "@/types";
import { FC } from "react";
import { franc } from "franc";
import { numberWithCommas } from "@/helpers";

const Leader: FC<ILeader> = ({
  avatar_thumbnail,
  avatar,
  nickname,
  position,
  hypercoins_earned,
}) => {
  const lang = franc(nickname);

  return (
    <div className="font-PPMon flex justify-between items-center w-full bg-gradient-to-r from-black to-black/55 rounded-full h-[4.5vw] px-[2vw] portrait:h-[8vw] portrait:px-[4vw]">
      <div className="flex items-center gap-[1.5vw] portrait:gap-[2.5vw] ">
        <p className="portrait:text-[3.5vw] text-[1.5vw]">{position}.</p>
        <div className="relative rounded-full border-green border-[2px] overflow-hidden w-[3vw] h-[3vw] portrait:w-[6vw] portrait:h-[6vw]">
          <img
            className="object-cover"
            src={avatar_thumbnail || avatar || "/images/avatar.jpg"}
            alt="avatar"
          />
        </div>
        <p
          className={`truncate text-[1.5vw] max-w-[21vw] portrait:text-[3.5vw] portrait:max-w-[45vw] ${
            lang === "arb" ? "font-geSS" : "font-PPMon"
          }`}
        >
          {nickname}
        </p>
      </div>
      <div className="flex  justify-end items-center truncate w-[10vw] text-[1.5vw] portrait:w-[20vw] portrait:text-[3.5vw]">
        {numberWithCommas(hypercoins_earned)}
      </div>
    </div>
  );
};

export default Leader;
