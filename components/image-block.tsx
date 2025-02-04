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
          className={`lg:-mt-32 w-[90%] mx-auto ${open && "lg:mb-40 lg:pt-10"}`}
        >
          <div className="flex items-center justify-between w-full">
            <h2 className="pt-6 mb-6 lg:mb-10 lg:pt-10 text-center w-full">
              {title}
            </h2>
            <div
              className="cursor-pointer z-10"
              onClick={() => handleOnClick()}
            >
              <IoIosCloseCircleOutline fontSize={50} />
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
