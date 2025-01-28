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
<<<<<<< HEAD
        width={1300}
        height={200}
=======
        width={600}
        height={180}
>>>>>>> f3ef1ea6ae86d173ce78509b21c34ebaaa4db699
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
<<<<<<< HEAD
          width={400}
          height={190}
          className="animate-flash absolute right-[430px] top-12"
=======
          width={210}
          height={150}
          className="animate-flash absolute right-52 top-8"
>>>>>>> f3ef1ea6ae86d173ce78509b21c34ebaaa4db699
        />
        <Image
          src={"/images/pointer_2.svg"}
          alt="pointer"
          width={120}
          height={130}
<<<<<<< HEAD
          className="absolute right-[430px] top-64"
=======
          className="absolute right-56 top-40"
>>>>>>> f3ef1ea6ae86d173ce78509b21c34ebaaa4db699
        />
        <Image
          src={"/images/qr.svg"}
          alt="qr code"
<<<<<<< HEAD
          width={350}
          height={180}
          className="absolute right-12 top-12"
=======
          width={170}
          height={170}
          className="absolute right-6 top-6"
>>>>>>> f3ef1ea6ae86d173ce78509b21c34ebaaa4db699
        />
        <Image
          src={"/images/smileyFace.svg"}
          alt="smiley face"
<<<<<<< HEAD
          width={270}
          height={120}
          className="absolute left-[145px] top-[160px]"
=======
          width={150}
          height={120}
          className="absolute left-[100px] top-[84px]"
>>>>>>> f3ef1ea6ae86d173ce78509b21c34ebaaa4db699
        />
        <Image
          src={"/images/phrase_3.svg"}
          alt="phrase 3"
<<<<<<< HEAD
          width={400}
=======
          width={220}
>>>>>>> f3ef1ea6ae86d173ce78509b21c34ebaaa4db699
          height={180}
          className="absolute left-16 top-12 animate-rotate"
        />
      </div>
    </div>
  );
}
