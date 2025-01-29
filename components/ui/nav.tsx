"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkType } from "../lib/interface";
import { TbMenu } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import useStore from "../lib/store";

interface NavProps {
  settings: {
    logo: {
      filename: string;
    };
    menu: any;
  };
}

export const Nav = ({ settings }: NavProps) => {
  const { menu } = settings;
  const { openMenu, setOpenMenu } = useStore();
  return (
    /*   <div className="header absolute bg-transparent text-black w-full py-10 z-50">
      <div className="flex justify-center container">
        <nav className="flex gap-8">
          <ul className="flex gap-8">
            {menu.map((el: LinkType, index: number) => {
              return (
                <Link href={el.link.cached_url} key={index}>
                  {el.title}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </div> */

    <header
      className={`absolute px-5 top-0 flex justify-center items-center w-full py-5 z-50`}
    >
      <div className={`flex justify-end fixed right-5 top-2`}>
        <TbMenu
          size={80}
          strokeWidth={0.5}
          color="white"
          className={` ${
            openMenu ? "hidden" : "block"
          } cursor-pointer text-[60px] mt-5 lg:mt-0 lg:text-[80px] transition-all ease-linear  `}
          onClick={() => setOpenMenu(true)}
        />

        <nav
          className={`pb-8 lg:pb-0 overflow-y-auto bg-white w-[100vw] h-[100vh] lg:w-[35vw] lg:h-[100vh] absolute -top-2 -right-5 lg:-top-2 lg:-right-5 transition-all duration-500 ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end px-8 lg:px-10 pt-8">
            <TfiClose
              fontSize={40}
              className="cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          </div>

          <ul className="font-kis-normal flex flex-col pl-8 lg:pl-16 pt-16 gap-3">
            {menu.map((el: LinkType, index: number) => {
              return (
                <Link
                  href={el.link.cached_url}
                  key={index}
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className={`text-[38px] lg:text-[40px] relative hover:underline decoration-[#16110D] underline-offset-8 
                  `}
                >
                  {el.title}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
