import Image from 'next/image';

import Link from 'next/link';
import images from '../../assets';

const Footer = () => (
  <footer className="sm:absolute sm:bottom-0 flexCenter border-t dark:border-gray-100 border-gray-400">
    <div className="flexCenter w-full mt-5 border-b dark:border-gray-100 border-gray-400 ">
      <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
        <p className="font-poppins dark:text-white text-black font-semibold text-base">
          Agmo Studio All Rights Reserved
        </p>
        <div className="flex flex-row sm:mt-4">
          {[
            images.instagram,
            images.twitter,
            images.telegram,
            images.discord,
          ].map((image, index) => (
            <div className="mx-2 cursor-pointer" key={`image ${index}`}>
              {/* //TODO need to configure every links individually later */}
              <Link href="/">
                <div>
                  <Image
                    src={image}
                    key={index}
                    objectFit="contain"
                    width={24}
                    height={24}
                    alt="social"
                    className="filter invert dark:filter-none dark:invert-0"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
