import { ILeader } from "@/types";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { franc } from "franc";

const Leader: FC<ILeader & { delay: number }> = ({
  avatar_thumbnail,
  avatar,
  nickname,
  position,
  hypercoins_earned,
  delay,
}) => {
  const [isSpinning, setIsSpinning] = useState(true);
  const lang = franc(nickname);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSpinning(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`font-PPMon flex justify-between items-center w-full  h-20 bg-gradient-to-r from-black to-black/55 rounded-full px-14
        ${isSpinning ? "animate-flip" : ""}`}
      id="leader"
    >
      {isSpinning ? (
        ""
      ) : (
        <>
          <div className="flex items-center gap-6">
            <p className="text-4xl">{position}.</p>
            <div className="relative rounded-full border-green border-[2px] overflow-hidden w-14 h-14">
              <Image
                src={avatar_thumbnail || avatar || "/images/avatar.jpg"}
                alt="avatar"
                objectFit="cover"
                fill
              />
            </div>
            <p
              className={`text-4xl max-w-[500px]  2xl:max-w-[380px]  truncate ${
                lang === "arb" ? "font-geSS" : "font-PPMon"
              }`}
            >
              {nickname}
            </p>
          </div>
          <div className="flex  justify-end items-center  truncate max-w-48">
            <p className=" text-4xl">{hypercoins_earned.toString()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Leader;
