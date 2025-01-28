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
      className={`font-PPMon flex justify-between items-center w-full  h-40 bg-gradient-to-r from-black to-black/55 rounded-full px-20
        ${isSpinning ? "animate-flip" : ""}`}
      id="leader"
    >
      {isSpinning ? (
        ""
      ) : (
        <>
          <div className="flex items-center gap-14">
            <p className="text-7xl 2xl:text-[66px]">{position}.</p>
            <div className="relative rounded-full border-green border-[2px] overflow-hidden w-28 h-28">
              <Image
                src={avatar_thumbnail || avatar || "/images/avatar.jpg"}
                alt="avatar"
                objectFit="cover"
                fill
              />
            </div>
            <p
<<<<<<< HEAD
              className={`text-7xl 2xl:text-[66px] max-w-[1100px] 2xl:w-[900px]  truncate ${
=======
              className={`text-4xl max-w-[500px]  2xl:max-w-[380px]  truncate ${
>>>>>>> f3ef1ea6ae86d173ce78509b21c34ebaaa4db699
                lang === "arb" ? "font-geSS" : "font-PPMon"
              }`}
            >
              {nickname}
            </p>
          </div>
          <div className="flex  justify-end items-center truncate w-[450px] 2xl:w-[400px] 0">
            <p className=" text-7xl 2xl:text-[66px]">
              {hypercoins_earned.toString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Leader;
