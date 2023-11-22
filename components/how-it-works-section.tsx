import { howItWorksSectionData } from "@/utils/data";
import React from "react";

export function HowItWorksSection() {
  return (
    <div className="p-45 rounded-3xl bg-primary-500 flex flex-col gap-10 md:mx-96 mx-5">
      <section className="flex justify-between items-center">
        <h3 className="font-sora text-4xl/150 font-bold text-white">
          How it works?
        </h3>

        <button className="uppercase rounded-lg border border-white md:p-4 p-2 h-fit text-white hover:text-white/80 whitespace-nowrap">
          6 steps
        </button>
      </section>

      <section className="flex flex-wrap justify-between gap-4">
        {howItWorksSectionData.map(({ icon, title, description }, id) => (
          <article
            key={id}
            className="p-6 bg-primary-700 flex flex-col w-fit rounded-3xl flex-grow">
            <button className="rounded-xl p-4 bg-white w-fit">{icon}</button>
            <h3 className="font-sora text-[26px]/150 font-bold text-white pt-56">
              {title}
            </h3>
            <p className="text-[#BEC5D2] text-lg/[160%] font-medium pt-1 min-[877px]:w-[300px]">
              {description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
