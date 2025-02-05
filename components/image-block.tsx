"use client";
import Image from "next/image";
import useStore from "./lib/store";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ImageBlockProps {
  blok: {
    title: string;
    image: {
      filename: string;
      name: string;
    };

    second_image: {
      filename: string;
      name: string;
    };
  };
}

export const ImageBlock = ({ blok }: ImageBlockProps) => {
  const { open, setOpen } = useStore();
  const { title, image, second_image } = blok;
  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <div
          className={`lg:-mt-32 w-[90%] mx-auto ${open && "lg:mb-52 lg:pt-10"}`}
        >
          <div className="flex items-center justify-between w-full lg:pt-10 lg:min-h-[60px] mb-10">
            <h2 className="text-center w-full">{title}</h2>
            <div
              className="cursor-pointer z-10 "
              onClick={() => handleOnClick()}
            >
              <IoIosCloseCircleOutline className="text-[30px] lg:text-[50px]" />
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-10 w-[90%] lg:w-[80%] mx-auto ">
            <div className="relative w-[100%] h-[90%]">
              <Image
                src={image.filename}
                width={1000}
                height={400}
                alt={blok.image.name}
              />
            </div>
            <div>
              <Image
                src={second_image.filename}
                width={1000}
                height={400}
                alt={image.name}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
