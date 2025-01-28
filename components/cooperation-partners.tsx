"use client";

import { render } from "storyblok-rich-text-react-renderer";

export const CooperationBlock = ({ blok }: any) => {
  console.log(blok);
  return (
    <div className="-mt-32 flex flex-col items-center justify-center gap-6">
      <h2>{blok.title}</h2>
      <div className="w-[40%] leading-[3rem] text-center">
        {render(blok.content)}
      </div>
    </div>
  );
};
