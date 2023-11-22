import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="md:px-96 px-5 py-50 flex justify-between items-center gap-3 flex-wrap">
        <section>
          <Image
            fill
            className="!relative !w-[198px] h-[74px] cursor-pointer object-cover"
            alt="Company Logo"
            src="/MediSync Logo.svg"
          />

          <p className="min-[892px]:max-w-[405px] text-neutral-600 font-jakarta text-base/150 font-normal">
            MediSyncCare is a cutting-edge digital platform designed to address
            the challenges of medication adherence among individuals managing
            chronic conditions.
          </p>
          <figure className="pt-7 flex gap-45">
            <Image
              fill
              className="!relative !w-10 !h-10 cursor-pointer object-center"
              alt="Facebook Logo"
              src="/facebook.png"
            />
            <Image
              fill
              className="!relative !w-10 !h-10 cursor-pointer"
              alt="Twitter Logo"
              src="/twitter.png"
            />
            <Image
              fill
              className="!relative !w-10 !h-10 cursor-pointer"
              alt="Instagram Logo"
              src="/instagram.png"
            />
          </figure>
        </section>

        <section className="flex flex-col gap-6 items-center justify-center">
          <p className="font-jakarta text-base/150 font-normal text-neutral-600 min-[892px]:max-w-[352px]">
            Subscribe to stay tuned for new web design and latest updates.
            Let&apos;s do it!
          </p>

          <form className="flex gap-2 items-center max-[500px]:flex-col w-full">
            <input
              type="email"
              className="py-[18px] pl-[17px] rounded-[60px] text-neutral-200 text-sm leading-normal bg-[#F6F6F6] pr-115 w-full"
              placeholder="Enter your Email Address"
            />

            <button
              type="submit"
              className="px-[26px] text-white bg-primary-500 h-56 rounded-[60px] w-full">
              Subscribe
            </button>
          </form>
        </section>
      </div>

      <span className="text-neutral-600 font-jakarta text-base/150 self-center">
        &copy; 2023 All Rights Reserved
      </span>
    </footer>
  );
}
