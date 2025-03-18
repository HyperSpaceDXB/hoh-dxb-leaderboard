import { ILeader } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { franc } from "franc";
import useIsPortrait from "@/hooks/useIsPortrait";
import { numberWithCommas } from "@/helpers";

const Leader: FC<ILeader> = ({
  avatar_thumbnail,
  avatar,
  nickname,
  position,
  hypercoins_earned,
}) => {
  const isPortrait = useIsPortrait();
  const lang = franc(nickname);

  return (
    <div
      className={`font-PPMon flex justify-between items-center w-full bg-gradient-to-r from-black to-black/55 rounded-full
        ${isPortrait ? "h-[8vw] px-[4vw]" : "h-[4.5vw] px-[2vw]"}
       `}
    >
      <div
        className={`flex items-center ${
          isPortrait ? "gap-[2.5vw]" : "gap-[1.5vw]"
        }`}
      >
        <p className={` ${isPortrait ? "text-[3.5vw]" : "text-[1.5vw]"}`}>
          {position}.
        </p>
        <div
          className={`relative rounded-full border-green border-[2px] overflow-hidden ${
            isPortrait ? "w-[6vw] h-[6vw]" : "w-[3vw] h-[3vw]"
          }`}
        >
          <img
            className="object-cover"
            src={avatar_thumbnail || avatar || "/images/avatar.jpg"}
            alt="avatar"
          />
        </div>
        <p
          className={`truncate  ${lang === "arb" ? "font-geSS" : "font-PPMon"}
              ${
                isPortrait
                  ? "text-[3.5vw] max-w-[45vw]"
                  : "text-[1.5vw] max-w-[21vw]"
              }`}
        >
          {nickname}
        </p>
      </div>
      <div
        className={`flex  justify-end items-center truncate ${
          isPortrait ? "w-[20vw] text-[3.5vw]" : "w-[10vw] text-[1.5vw]"
        }`}
      >
        {numberWithCommas(hypercoins_earned)}
      </div>
    </div>
  );
};

export default Leader;
