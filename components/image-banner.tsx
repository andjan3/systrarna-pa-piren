"use client";

import Image from "next/image";
import Link from "next/link";
import { render } from "storyblok-rich-text-react-renderer";
import useStore from "./lib/store";

interface ImageBannerProps {
  blok: {
    title: string;
    image: {
      filename: string;
      name: string;
    };
    link: any;
    content: React.ReactNode;
    button_title: string;
  };
}

export const ImageBanner = ({ blok }: ImageBannerProps) => {
  const { title, image, content, link, button_title } = blok;
  const { open, setOpen } = useStore();

  const handleOnClick = () => {
    setOpen(!open);
  };
  return (
    <div className="w-full h-[90vh] relative">
      <div className="w-full h-[80%] relative ">
        <Image
          src={image.filename}
          fill
          className="object-cover"
          alt={image.name}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white gap-8 p-4">
          <h2 className="font-bold">{title}</h2>
          <div className="mt-4 w-[50%]">{render(content)}</div>

          <button
            className="mt-4 px-6 py-2 bg-[#ef9941] text-[20px] text-white rounded"
            onClick={() => handleOnClick()}
          >
            {button_title}
          </button>
        </div>
      </div>
    </div>
  );
};
