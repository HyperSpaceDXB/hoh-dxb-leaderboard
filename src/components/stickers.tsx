"use client";
import useIsPortrait from "@/hooks/useIsPortrait";
import Image from "next/image";
export default function Stickers() {
  const isPortrait = useIsPortrait();
  return isPortrait ? (
    <div className="flex gap-10 absolute right-10 bottom-10">
      <Image
        src={"/images/phrase_1.svg"}
        alt="phrase"
        width={600}
        height={180}
        className="animate-flash"
      />
      <Image
        src={"/images/pointer.svg"}
        alt="pointer"
        width={250}
        height={80}
      />
      <Image src={"/images/qr.svg"} alt="qr" width={200} height={140} />
    </div>
  ) : (
    <div>
      <div>
        <Image
          src={"/images/phrase_2.svg"}
          alt="phrase"
          width={210}
          height={150}
          className="animate-flash absolute right-52 top-8"
        />
        <Image
          src={"/images/pointer_2.svg"}
          alt="pointer"
          width={120}
          height={130}
          className="absolute right-56 top-40"
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
          alt="smiley face"
          width={150}
          height={120}
          className="absolute left-[100px] top-[84px]"
        />
        <Image
          src={"/images/phrase_3.svg"}
          alt="phrase 3"
          width={220}
          height={180}
          className="absolute left-16 top-12 animate-rotate"
        />
      </div>
    </div>
  );
}
