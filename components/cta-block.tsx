import Image from "next/image";
import Link from "next/link";

export const CTABlock = ({ blok, settings }: any) => {
  console.log("seeeetttings", blok);
  return (
    <div className="grid grid-cols-2 w-[90%] h-[70vh] mx-auto mt-16">
      <div className="relative w-full h-[700px]">
        <Image
          src={blok.image.filename}
          fill
          className="object-cover"
          alt={blok.image.filename}
        />
        <div className="contact absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 gap-4">
          <h2>{blok.title}</h2>
          <div>{settings.content.adress}</div>
          <div>{settings.content.phone_number}</div>
          <Link href={settings.content.link.cached_url}>
            {settings.content.link.url}
          </Link>
        </div>
      </div>
      <div className="relative w-full h-[700px]">
        <Image
          src={blok.second_image.filename}
          fill
          className="object-cover"
          alt={blok.second_image.filename}
        />
        <div className="contact absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10 gap-4">
          <Link
            className="mt-4 px-6 py-2 bg-[#ef9941] text-[20px] text-white rounded"
            href={blok.button.cached_url}
          >
            {blok.button_title}
          </Link>
        </div>
      </div>
    </div>
  );
};
