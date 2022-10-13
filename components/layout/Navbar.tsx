import { Dispatch, SetStateAction, useState} from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../../assets';

// Menu Items
interface IMenuItemsProps {
  isMobile?: boolean;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const MenuItems = ({
  isMobile = false,
  active,
  setActive,
}: IMenuItemsProps) => {
  const generateLink = (i: number) => {
    switch (i) {
      case 0:
        return '/';
      case 1:
        return '/sign-in';
      default:
        return '/';
    }
  };

  return (
    <ul
      className={`list-none flexCenter flex-row ${
        isMobile && 'flex-col h-full'
      }`}
    >
      {['Home', 'Sign In'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row items-center font-poppins font-semibold text-base dark:hover:text-white hover:text-black mx-3
            ${
              active === item
                ? 'dark:text-white text-black'
                : 'dark:text-gray-300 text-gray-200'
            } 
            ${isMobile && 'my-5 text-xl'}`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Sign In');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-black bg-white dark:border-black border-gray-100">
      <div className="flex flex-1 flex-row justify-start">
        <Link href="/">
          <div
            className="flexCenter md:hidden cursor-pointer"
            onClick={() => {}}
          >
            <p className=" dark:text-white text-black font-semibold text-lg ml-1">
              Agmo Studio
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex" onClick={() => {}}>
            <Image
              src={images.logo}
              objectFit="contain"
              width={45}
              height={45}
              alt="logo"
              className='filter invert dark:filter-none dark:invert-0'
            />
          </div>
        </Link>
      </div>
      {/* web menu */}
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div>
        <div className="md:hidden flex">
          <MenuItems active={active} setActive={setActive} />
        </div>
      </div>

      {/* mobile menu */}
      <div className="hidden md:flex ml-2 ">
        {isOpen ? (
          <Image
            src={images.cross}
            onClick={() => setIsOpen(false)}
            objectFit="contain"
            width={20}
            height={20}
            alt="close"
            className="filter invert dark:filter-none dark:invert-0"
          />
        ) : (
          <Image
            src={images.menu}
            objectFit="contain"
            width={25}
            height={25}
            alt="menu"
            onClick={() => setIsOpen(true)}
            className="filter invert dark:filter-none dark:invert-0"
          />
        )}
        {isOpen && (
          <div className="fixed inset-0 top-65 dark:bg-black bg-white z-10 nav-h flex justify-between flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
