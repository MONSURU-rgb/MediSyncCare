import { Avatar, Burger } from "@mantine/core";
import { AiFillLock } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="grid gap-96 pt-90 pb-70 min-[874px]:grid-cols-2 md:px-96 px-5">
      <section className="flex flex-col gap-3">
        <article className="rounded-[60px] py-3 px-[14px] gap-[10px] border border-[#D1E5FF] bg-primary-50 sm:flex w-fit max-[643px]:hidden">
          <AiFillLock size="18" color="#032F69" />
          <p className="text-[13px]/150 font-normal text-primary-900">
            The Best Medical Adherence Platform in Nigeria
          </p>
        </article>

        <h2 className="font-sora text-4xl/150 font-bold text-primary-900  min-[874px]:max-w-[533px]">
          Revolutionary Medication Adherence Solutions for Chronic Wellness
        </h2>

        <p className="font-jakarta text-[16px]/150 font-normal min-[874px]:max-w-[533px]">
          Crafting a Digital Frontier that Empowers Patients and Healthcare
          Experts to Seamlessly Manage Medication Regimens and Foster Lasting
          Health
        </p>

        <div className="flex flex-col gap-56 pt-9">
          <section className="flex gap-[18px]">
            <button className="bg-neutral-600 text-white px-2 py-1 rounded flex gap-1">
              <FaGooglePlay color="white" size="36px" />
              <article className="leading-[16px]">
                <span className="uppercase text-[10px]">Get it on</span>
                <h5 className="leading-[16px] font-jakarta">Google Play</h5>
              </article>
            </button>
            <button className="bg-neutral-600 text-white pl-1 pr-2 py-1 rounded flex gap-1">
              <IoLogoApple color="white" size="36px" />
              <article className="leading-[16px]">
                <span className="uppercase text-[10px]">Get it on</span>
                <h5 className="leading-[16px] font-jakarta">Google Play</h5>
              </article>
            </button>
          </section>

          <figure className="flex gap-6 flex-wrap">
            <Avatar.Group spacing="sm">
              <Avatar src="/client-image-1.svg" radius="xl" size={64} />
              <Avatar src="/avatar-image-2.svg" radius="xl" size={64} />
              <Avatar src="/avatar-image-3.svg" radius="xl" size={64} />
              <Avatar src="/avatar-image-4.svg" radius="xl" size={64} />
            </Avatar.Group>

            <article>
              <h4 className="font-sora text-[26px]/150 font-bold text-neutral-600">
                5000+
              </h4>
              <p className="font-jakarta text-[16px]/150 font-normal">
                Users around the world
              </p>
            </article>
          </figure>
        </div>
      </section>

      <Image
        fill
        className="!relative w-full cursor-pointer object-contain aspect-auto"
        alt="Hero section Image"
        src="/mobile-mimic-image.png"
      />
    </div>
  );
}
