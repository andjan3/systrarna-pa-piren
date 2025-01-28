"use client";

import { render } from "storyblok-rich-text-react-renderer";
import useStore from "./lib/store";

interface CooperationProps {
  blok: {
    title: string;
    content: React.ReactNode;
  };
}

export const CooperationBlock = ({ blok }: CooperationProps) => {
  const { open } = useStore();
  const { title, content } = blok;
  return (
    <div
      className={`flex flex-col items-center justify-center gap-6 ${
        open ? "mt-16" : "-mt-24"
      }`}
    >
      <h2>{title}</h2>
      <div className="w-[40%] leading-[3rem] text-center">
        {render(content)}
      </div>
    </div>
  );
};
