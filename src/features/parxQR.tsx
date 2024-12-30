import Image from "next/image";
import { FC } from "react";

const ParxQR: FC = () => {
  return (
    <div className="flex items-center justify-between w-full pl-[180px] mb-[180px] ">
      <Image src="/images/qr.png" alt="qr code" width={1500} height={1500} />
      <div className="text-center h-[1200px] ">
        <div className="text-[120px] font-semibold leading-tight mb-[150px]">
          <h1>Play The Park!</h1>
          <h1>Win The Park!</h1>
        </div>
        <h2 className="text-[100px] font-semibold">
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
