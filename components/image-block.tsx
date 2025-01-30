"use client";
import Image from "next/image";
import useStore from "./lib/store";

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
  const { open } = useStore();
  const { title, image, second_image } = blok;

  return (
    <>
      {open && (
        <div className={`lg:-mt-32  ${open && "lg:mb-40"}`}>
          <h2 className="pt-6 mb-6 lg:mb-10 lg:pt-10">{title}</h2>

          <div className=" grid grid-cols-2 gap-10 w-[90%] lg:w-[80%] mx-auto">
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
