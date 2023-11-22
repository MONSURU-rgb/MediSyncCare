import Image from "next/image";

export function PartnersSection() {
  return (
    <div className="flex flex-col gap-7 md:px-96 px-5 marquee overflow-hidden">
      <h4 className="text-[26px]/150 font-bold font-sora text-neutral-600 text-center">
        Trusted By
      </h4>

      <figure className="flex justify-between marquee-content gap-5">
        <Image
          fill
          alt="combinator logo"
          className="!relative !w-fit h-10"
          src="/y-combinator-logo.svg"
        />

        <Image
          fill
          alt="Wired logo"
          className="!relative !w-fit h-10"
          src="/wired-logo.svg"
        />
        <Image
          fill
          alt="Engadget logo"
          className="!relative !w-fit h-10"
          src="/engadget-logo.svg"
        />
      </figure>
    </div>
  );
}
