import { MedsyncLogo } from "@/public/medsync-logo";
import { HamburgerDropdown } from "@/components";
import Image from "next/image";
import { ArrowRight, Clock } from "iconsax-react";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { Avatar, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <header>
      <section className="py-18 text-center bg-[var(--primary-700)] flex justify-center items-center flex-wrap">
        <span className="font-jakarta text-base text-white font-normal">
          MediSyncCare Selected for Y Combinator Accelerator Program.
        </span>
        <article className="flex gap-3 items-center cursor-pointer">
          <span className="font-jakarta text-base font-semibold text-white">
            &nbsp; Read More
          </span>
          <ArrowRight size="16" color="#FFFFFF" />
        </article>
      </section>

      <nav className="min-[800px]:px-96 px-5 py-18 flex justify-between items-center">
        <section className="flex md:justify-between w-full items-center max-[541px]:flex-wrap gap-10 max-[541px]:gap-2">
          <Link href="/">
            <Image
              fill
              className="!relative !w-[198px] !h-[74px] cursor-pointer object-cover"
              alt="Company Logo"
              src="/MediSync-Logo-2.png"
            />
          </Link>
          <HamburgerDropdown styles="hidden font-jakarta text-base text-neutral-600 font-normal gap-56 cursor-pointer hover:text-neutral-400 min-[841px]:inline-flex whitespace-nowrap" />
          <Link href="/">
            <button className="rounded-[50px] p-3 bg-primary-500 flex gap-[10px] items-center cursor-pointer hover:bg-primary-500/90">
              <FiDownload color="white" />
              <h5 className="text-base font-medium font-jakarta text-white whitespace-nowrap">
                Download App
              </h5>
            </button>
          </Link>
        </section>

        <section className="md:hidden">
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
            className="md:hidden block transition duration-500 relative"
          />

          {opened && (
            <HamburgerDropdown styles="font-jakarta text-base text-neutral-600 font-normal cursor-pointer hover:text-white/50 whitespace-nowrap flex flex-col p-4 bg-primary-700 rounded-lg gap-5 text-white absolute right-[0px] z-50 md:hidden" />
          )}
        </section>
      </nav>
    </header>
  );
}
