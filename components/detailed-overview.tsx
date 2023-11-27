import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";

export function DetailedOverview() {
  return (
    <section className="bg-[url(/spiral-frame.png)] md:pl-144 flex items-center bg-cover bg-center w-full px-5 mine:py-0 py-71">
      <article className="flex flex-col gap-6">
        <h2 className="md:max-w-[531px] text-white [@media(min-width:567px)]:text-4xl/150 font-bold font-sora text-2xl/150">
          Leave medication reminders and tracking to us.
        </h2>

        <p className="text-white font-jakarta text-base/150 font-normal md:w-[587px]">
          Discover a seamless way to manage your health. Download our app today
          and gain access to intuitive features that help you stay on top of
          your medication regimen effortlessly. Experience personalized
          reminders, precise tracking, and easy communication with healthcare
          providers—all at your fingertips.
        </p>

        <section className="flex gap-[18px] pt-2">
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
      </article>

      <Image
        fill
        className="!relative cursor-pointer w-full h-fit [@media(max-width:1187px)]:hidden"
        alt="Nurse image"
        src="/nurse.png"
      />
    </section>
  );
}
