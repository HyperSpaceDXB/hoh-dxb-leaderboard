"use client";
import useIsPortrait from "@/hooks/useIsPortrait";
import Image from "next/image";
export default function Stickers() {
  const isPortrait = useIsPortrait();
  return isPortrait ? (
    <div className="flex gap-5 absolute right-8 bottom-10">
      <Image
        src={"/images/phrase_1.svg"}
        alt="phrase"
        width={550}
        height={180}
        className="animate-flash"
      />
      <Image src={"/images/pointer.svg"} alt="pointer" width={80} height={80} />
      <Image src={"/images/qr.svg"} alt="qr" width={140} height={140} />
    </div>
  ) : (
    <div>
      <div className=" ">
        <Image
          src={"/images/phrase_2.svg"}
          alt="phrase"
          width={190}
          height={190}
          className="animate-flash absolute right-52 top-8"
        />
        <Image
          src={"/images/pointer_2.svg"}
          alt="pointer"
          width={130}
          height={130}
          className="absolute right-52 top-36"
        />
        <Image
          src={"/images/qr.svg"}
          alt="qr code"
          width={170}
          height={170}
          className="absolute right-6 top-6"
        />
        <Image
          src={"/images/smileyFace.svg"}
          alt="qr code"
          width={120}
          height={120}
          className="absolute left-[77px] top-[96px]"
        />
        <Image
          src={"/images/phrase_3.svg"}
          alt="qr code"
          width={180}
          height={180}
          className="absolute left-12 top-16 animate-rotate"
        />
      </div>
    </div>
  );
}
