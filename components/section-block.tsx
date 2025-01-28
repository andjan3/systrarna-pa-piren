import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useStore from "./lib/store";

interface SectionProps {
  blok: {
    title: string;
    styling: boolean;
    image: {
      filename: string;
      name: string;
    };
    content: React.ReactNode;
    second_content: React.ReactNode;
  };
}
export const SectionBlock = ({ blok }: SectionProps) => {
  console.log("teeeest", blok);
  const { openDropdown, setOpenDropdown } = useStore();

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const { title, image, content, second_content, styling } = blok;

  return (
    <div
      className={`grid grid-cols-2 gap-8 ${
        styling ? "bg-[#f8f8f8] h-[65vh] -mt-28" : "h-[95vh]"
      }`}
    >
      <div
        className={`relative order-2 ${
          styling ? "mx-auto my-auto w-[80%] h-[80%]" : "w-[100%] h-[100%] "
        }`}
      >
        <Image
          src={image.filename}
          fill
          className="object-cover"
          alt={image.name}
        />
      </div>
      <div
        className={`image-block flex flex-col gap-4 ${
          styling ? "w-[80%] mx-auto my-auto" : "px-16"
        }`}
      >
        <h2
          className={`text-[45px] leading-[60px] ${
            styling ? "mt-0 text-start pb-12" : "text-center mt-32"
          }`}
        >
          {title}
        </h2>

        <div>{render(content)}</div>
        {openDropdown && <div>{render(second_content)}</div>}
        <div
          className={`${
            styling ? "hidden" : "flex gap-2 items-center cursor-pointer"
          }`}
          onClick={handleDropdown}
        >
          {openDropdown ? <div>Läs mindre</div> : <div>Läs mer</div>}
          <MdOutlineKeyboardArrowDown
            className={`${
              openDropdown && "rotate-180 transition-transform duration-300"
            }`}
            fontSize={25}
          />
        </div>
      </div>
    </div>
  );
};
