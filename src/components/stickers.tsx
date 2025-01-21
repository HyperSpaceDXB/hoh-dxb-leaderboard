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
        width={1300}
        height={200}
        className="animate-flash"
      />
      <Image
        src={"/images/pointer.svg"}
        alt="pointer"
        width={250}
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
          className="animate-flash absolute right-[430px] top-12"
        />
        <Image
          src={"/images/pointer_2.svg"}
          alt="pointer"
          width={250}
          height={130}
          className="absolute right-[430px] top-64"
        />
        <Image
          src={"/images/qr.svg"}
          alt="qr code"
          width={350}
          height={180}
          className="absolute right-12 top-12"
        />
        <Image
          src={"/images/smileyFace.svg"}
          alt="smiley face"
          width={270}
          height={120}
          className="absolute left-[145px] top-[160px]"
        />
        <Image
          src={"/images/phrase_3.svg"}
          alt="phrase 3"
          width={400}
          height={180}
          className="absolute left-20 top-24 animate-rotate"
        />
      </div>
    </div>
  );
}
