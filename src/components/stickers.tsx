"use client";
import useIsPortrait from "@/hooks/useIsPortrait";
import Image from "next/image";
export default function Stickers() {
  const isPortrait = useIsPortrait();
  return isPortrait ? (
    <div className="flex gap-12 absolute right-10 bottom-10">
      <Image
        src={"/images/phrase_1.svg"}
        alt="phrase"
        width={1100}
        height={180}
        className="animate-flash"
      />
      <Image
        src={"/images/pointer.svg"}
        alt="pointer"
        width={200}
        height={80}
      />
      <Image src={"/images/qr.svg"} alt="qr" width={340} height={140} />
    </div>
  ) : (
    <div>
      <div>
        <Image
          src={"/images/phrase_2.svg"}
          alt="phrase"
          width={400}
          height={190}
          className="animate-flash absolute right-96 top-10"
        />
        <Image
          src={"/images/pointer_2.svg"}
          alt="pointer"
          width={250}
          height={130}
          className="absolute right-96 top-64"
        />
        <Image
          src={"/images/qr.svg"}
          alt="qr code"
          width={300}
          height={170}
          className="absolute right-10 top-10"
        />
        <Image
          src={"/images/smileyFace.svg"}
          alt="smiley face"
          width={250}
          height={120}
          className="absolute left-[130px] top-[150px]"
        />
        <Image
          src={"/images/phrase_3.svg"}
          alt="phrase 3"
          width={350}
          height={180}
          className="absolute left-20 top-24 animate-rotate"
        />
      </div>
    </div>
  );
}
