"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkType } from "../lib/interface";

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
  return (
    <div className="header absolute bg-transparent text-black w-full py-10 z-50">
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
    </div>
  );
};
