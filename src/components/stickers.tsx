"use client";
import useIsPortrait from "@/hooks/useIsPortrait";
import Image from "next/image";
export default function Stickers() {
  const isPortrait = useIsPortrait();
  return isPortrait ? (
    <div className="absolute bottom-0 right-0  bg-red-600 w-full">
      <div className="w-[60vw] h-[10vw] absolute right-[35vw] bottom-[5vw] ">
        <Image
          src={"/images/phrase_1.svg"}
          alt="phrase"
          fill
          className="animate-flash "
        />
      </div>
      <div className="w-[14vw] h-[10vw] absolute right-[20vw] bottom-[5vw]">
        <Image src={"/images/pointer.svg"} alt="pointer" fill />
      </div>
      <div className="w-[16vw] h-[16vw] absolute right-[2.5vw] bottom-[2.5vw]">
        <Image src={"/images/qr.svg"} alt="qr" fill />
      </div>
    </div>
  ) : (
    <div>
      <div className="w-[10vw] h-[7vw] absolute right-[11vw] top-[1vw]">
        <Image
          src={"/images/phrase_2.svg"}
          alt="phrase"
          fill
          className="animate-flash "
        />
      </div>
      <div className="w-[6vw] h-[6vw] absolute right-[11.5vw] top-[7.5vw]">
        <Image src={"/images/pointer_2.svg"} alt="pointer" fill />
      </div>
      <div className="w-[8vw] h-[8vw] absolute right-[2vw] top-[2vw]">
        <Image src={"/images/qr.svg"} alt="qr code" fill />
      </div>
      <div className="w-[8vw] h-[8vw] absolute left-[5vw] top-[4vw]">
        <Image src={"/images/smileyFace.svg"} alt="smiley face" fill />
      </div>
      <div className="w-[12vw] h-[12vw] absolute left-[3vw] top-[2vw]">
        <Image
          src={"/images/phrase_3.svg"}
          alt="phrase 3"
          fill
          className="animate-rotate"
        />
      </div>
    </div>
  );
}
