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
  const { openDropdown, open, setOpenDropdown } = useStore();

  const handleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const { title, image, content, second_content, styling } = blok;

  return (
    <div
      id={`${styling ? "booking" : "about"}`}
      className={`grid lg:grid-cols-2 gap-8 ${
        styling
          ? "bg-[#f8f8f8] lg:h-[65vh] lg:-mt-[3rem] lg:mb-[3rem]"
          : "h-full mt-6 lg:mt-0"
      } ${open && "mt-16"}`}
    >
      <div
        className={`relative order-2 ${
          styling
            ? "mx-auto my-auto w-[80%] h-[80%]"
            : "w-[100%] h-[45vh] lg:h-[94vh] "
        }`}
      >
        <Image
          src={image.filename}
          fill
          className="object-cover lg:max-h-full"
          alt={image.name}
        />
      </div>
      <div
        className={` image-block flex flex-col gap-4 lg:justify-center ${
          styling ? "w-[80%] mx-auto my-auto" : "px-6 lg:px-16"
        }`}
      >
        <h2
          className={`text-[45px] leading-[60px] ${
            styling ? "lg:mt-0 text-start mt-4" : "text-center mt-8"
          }`}
        >
          {title}
        </h2>

        <div>{render(content)}</div>
        {openDropdown && <div>{render(second_content)}</div>}
        <div
          className={`${
            styling
              ? "hidden"
              : "flex gap-2 items-center cursor-pointer text-[20px] lg:mb-8"
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
