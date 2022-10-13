import React from "react";
import Image from "next/image";

import images from "../../../assets";

const Banner = () => {
  return (
    <div className="bg-black/70 dark:bg-white/70 relative">
      <div className="mix-blend-overlay">
        <Image src={images.banner}  objectFit={"fill"}/>
      </div>

      <div className="absolute sm:top-1/4 lg:top-1/3 top-1/2 w-full text-center">
        <Image src={images.logo} />
      </div>
    </div>
  );
};

export default Banner;
