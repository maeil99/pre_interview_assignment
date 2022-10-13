import React from "react";
import Image from "next/image";

import images from "../../../assets";

const Banner = () => {
  return (
    <div>
      <div className="bg-black/70 dark:bg-white/70 w-full bg-cover bg-center relative">
        <Image
          src={images.banner}
          objectFit="cover"
          className="mix-blend-overlay"
        />
        <div className="absolute top-1/2 w-full text-center">
          <Image src={images.logo} objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
