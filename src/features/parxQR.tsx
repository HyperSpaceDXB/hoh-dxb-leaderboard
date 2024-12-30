"use client";
import useIsPortrait from "@/hooks/useIsPortrait";
import Image from "next/image";
import { FC } from "react";

const ParxQR: FC = () => {
  const isPortrait = useIsPortrait();
  return (
    <div className="flex flex-col 2xl:flex-row items-center justify-between w-full 2xl:pl-[180px] mb-[180px] ">
      {isPortrait && (
        <div className="text-[120px] font-semibold leading-tight my-[200px] ">
          <h1>Play The Park!</h1>
          <h1>Win The Park!</h1>
        </div>
      )}
      <Image src="/images/qr.png" alt="qr code" width={1500} height={1500} />
      <div className="text-center h-[1200px] ">
        {!isPortrait && (
          <div className="text-[120px] font-semibold leading-tight mb-[150px]">
            <h1>Play The Park!</h1>
            <h1>Win The Park!</h1>
          </div>
        )}
        <h2 className="text-[100px] font-semibold mt-[220px] 2xl:mt-0">
          Scan the QR code to download the{" "}
        </h2>
        <span className="text-[120px] text-green font-semibold">PARX APP</span>
      </div>
      <Image
        src="/images/sticker.png"
        alt="sticker"
        width={900}
        height={1000}
        className="absolute right-20 bottom-10"
      />
    </div>
  );
};

export default ParxQR;
