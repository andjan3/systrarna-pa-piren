"use client";
import Image from "next/image";
import useStore from "./lib/store";

export const ImageBlock = ({ blok }: any) => {
  const { open } = useStore();
  return (
    <>
      {open && (
        <div className="-mt-32">
          <h2 className="mb-16">{blok.title}</h2>

          <div className=" grid grid-cols-2 gap-10 w-[80%] mx-auto">
            <div className="relative w-[100%] h-[50%]">
              <Image
                src={blok.image.filename}
                width={1000}
                height={400}
                alt={blok.image.name}
              />
            </div>
            <div>
              <Image
                src={blok.second_image.filename}
                width={1000}
                height={400}
                alt={blok.image.name}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
