import Image from "next/image";
import { ArrowRight, Clock } from "iconsax-react";
import { FiDownload } from "react-icons/fi";
import { AiFillLock } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import Link from "next/link";
import { Avatar, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const howItWorksSectionData = [
  {
    icon: <FiDownload color="#032F69" size="16px" />,
    title: "Download the App",
    description:
      "Begin by downloading the medical platform's app from the respective app store",
  },
  {
    icon: <FiDownload color="#032F69" size="16px" />,
    title: "Account Setup",
    description:
      "Create an account within the app by providing necessary details and Set up a secure login to access the App",
  },
  {
    icon: <FiDownload color="#032F69" size="16px" />,
    title: "Medication Input",
    description:
      "Input your prescribed medications into the app, specifying details like names, dosages, timing etc.",
  },
  {
    icon: <FiDownload color="#032F69" size="16px" />,
    title: "Set Reminders",
    description:
      "Utilize the app's reminder feature to set up alerts for each medication as per your prescribed schedule.",
  },
  {
    icon: <FiDownload color="#032F69" size="16px" />,
    title: "Track Adherence",
    description:
      "Regularly monitor your adherence progress using the app's tracking feature and review your intake history",
  },
  {
    icon: <FiDownload color="#032F69" size="16px" />,
    title: "Health Collaboration",
    description:
      "Share adherence reports and progress updates with your healthcare provider ",
  },
];

const dataForBlogSection = [
  {
    image: "url(/health-management-blog.png)",
    health_scope_1: "Health Management",
    health_scope_2: "Self Care",
    title: "How To Track Your Medicine Intake.",
    post_duration: "2 minute read",
  },
  {
    image: "url(/mobile-health-blog.png)",
    health_scope_1: "Mobile Health",
    health_scope_2: "Health Managment",
    title: "A guide on how to employ a medication reminder app.",
    post_duration: "3 minute read",
  },
  {
    image: "url(/medicine-intake-blog-image.png)",
    health_scope_1: "Mobile Health",
    health_scope_2: "Health Managment",
    title: "How To Always Track Your Medicine Intake.",
    post_duration: "2 minute read",
  },
];

export default function Home() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div className="flex flex-col">
      <header>
        <section className="py-18 text-center bg-[var(--primary-700)] flex justify-center items-center">
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

        <nav className="px-96 py-18 flex justify-between items-center ">
          <Link href="/">
            <Image
              fill
              className="!relative !w-198 !h-74 aspect-[2.3/1] cursor-pointer"
              alt="Company Logo"
              src="/MediSync Logo.svg"
            />
          </Link>

          {/* <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
            className="bg-neutral-600"
          /> */}

          <ul className="hidden font-jakarta text-base text-neutral-600 font-normal gap-56 cursor-pointer hover:text-neutral-400 md:inline-flex">
            <li>Home</li>
            <li>Features</li>
            <li>How it works</li>
            <li>Blog</li>
          </ul>

          <Link href="/">
            <button className="rounded-[50px] p-3 bg-primary-500 flex gap-[10px] items-center cursor-pointer hover:bg-primary-500/90">
              <FiDownload color="white" />
              <h5 className="text-base font-medium font-jakarta text-white">
                Download App
              </h5>
            </button>
          </Link>
        </nav>
      </header>

      <main>
        {/*  Hero Section */}
        <div className="grid gap-96 pt-90 pb-70 grid-cols-2 px-96">
          <section className="flex flex-col gap-3">
            <article className="rounded-[60px] py-3 px-[14px] gap-[10px] border border-[#D1E5FF] bg-primary-50 flex w-fit">
              <AiFillLock size="18" color="#032F69" />
              <p className="text-[13px]/150 font-normal text-primary-900">
                The Best Medical Adherence Platform in Nigeria
              </p>
            </article>

            <h2 className="font-sora text-4xl/150 font-bold text-primary-900  max-w-[533px]">
              Revolutionary Medication Adherence Solutions for Chronic Wellness
            </h2>

            <p className="font-jakarta text-[16px]/150 font-normal max-w-[533px]">
              Crafting a Digital Frontier that Empowers Patients and Healthcare
              Experts to Seamlessly Manage Medication Regimens and Foster
              Lasting Health
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

              <figure className="flex gap-6">
                <Avatar.Group className="flex">
                  <Avatar src="/client-image-1.svg" />
                  <Avatar src="/client-image-1.svg" />
                  <Avatar src="/client-image-1.svg" />
                  <Avatar src="/client-image-1.svg" />
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
            className="!relative w-full cursor-pointer"
            alt="Company Logo"
            src="/hero-section-image.jpg"
          />
        </div>

        {/* Our Partners Section */}

        <section className="flex flex-col gap-7 px-96 marquee overflow-hidden">
          <h4 className="text-[26px]/150 font-bold font-sora text-neutral-600 text-center">
            Trusted By
          </h4>

          <figure className="flex justify-between">
            <Image
              fill
              alt="combinator logo"
              className="!relative !w-fit h-10"
              src="/y-combinator-logo.svg"
            />
            <Image
              fill
              alt="combinator logo"
              className="!relative !w-fit h-10"
              src="/forbes logo.svg"
            />
            <Image
              fill
              alt="combinator logo"
              className="!relative !w-fit h-10"
              src="/wired-logo.svg"
            />
            <Image
              fill
              alt="combinator logo"
              className="!relative !w-fit h-10"
              src="/engadget-logo.svg"
            />
          </figure>
        </section>

        {/* Our Core Features */}

        <div className="py-144 flex flex-col gap-56 px-96">
          <h3 className="text-neutral-600 font-sora text-4xl/150 font-bold text-center">
            Our Core Features
          </h3>

          <section className="flex gap-[18px]">
            <article className="flex flex-col gap-5 w-1/3">
              <Image
                fill
                className="!relative w-full cursor-pointer aspect-[1.2/1]"
                alt="Company Logo"
                src="/hero-section-image.jpg"
              />

              <h3 className="text-neutral-600 font-sora text-[26px]/150 font-bold">
                Set Medication Reminders
              </h3>

              <p className="text-neutral-800 font-jakarta text-base font-normal max-w-[406px]">
                Never miss a dose again! With our intuitive medication reminder
                feature, managing your medication schedule has never been
                easier. Simply input your medications, dosage details, and
                preferred timings.
              </p>
            </article>
            <article className="flex flex-col gap-5 w-1/3">
              <Image
                fill
                className="!relative w-full cursor-pointer aspect-[1.2/1]"
                alt="Company Logo"
                src="/hero-section-image.jpg"
              />

              <h3 className="text-neutral-600 font-sora text-[26px]/150 font-bold">
                Track Medication Intake
              </h3>

              <p className="text-neutral-800 font-jakarta text-base font-normal max-w-[406px]">
                Track and monitor your medication intake seamlessly through our
                dedicated intake tracker. Our app enables you to log each
                medication intake with a simple tap, providing you with a clear
                overview.
              </p>
            </article>
            <article className="flex flex-col gap-5 w-1/3">
              <Image
                fill
                className="!relative w-full cursor-pointer aspect-[1.2/1]"
                alt="Company Logo"
                src="/hero-section-image.jpg"
              />

              <h3 className="text-neutral-600 font-sora text-[26px]/150 font-bold">
                Healthcare Collaboration
              </h3>

              <p className="text-neutral-800 font-jakarta text-base font-normal max-w-[406px]">
                This feature facilitates seamless communication and
                collaboration between patients and their healthcare providers
                within the app. It allows users to securely share medication
                adherence reports & updates.
              </p>
            </article>
          </section>
        </div>

        {/* How it works section */}

        <div className="p-45 rounded-3xl bg-primary-500 flex flex-col gap-10 md:mx-96 mx-5">
          <section className="flex justify-between">
            <h3 className="font-sora text-4xl/150 font-bold text-white">
              How it works?
            </h3>

            <button className="uppercase rounded-lg border border-white p-4 text-white hover:text-white/80">
              6 steps
            </button>
          </section>

          <section className="flex flex-wrap justify-between gap-4">
            {howItWorksSectionData.map(({ icon, title, description }, id) => (
              <article
                key={id}
                className="p-6 bg-primary-700 flex flex-col w-fit rounded-3xl flex-grow">
                <button className="rounded-xl p-4 bg-white w-fit">
                  {icon}
                </button>
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

        {/* Blog Section */}

        <div className="pt-140 flex flex-col gap-8">
          <h3 className="text-neutral-600 text-sora text-4xl/150 font-bold  px-96">
            Blog Post
          </h3>

          <div className="flex gap-4 md:px-96 px-5 justify-between">
            {dataForBlogSection.map(
              (
                { image, health_scope_1, health_scope_2, title, post_duration },
                id
              ) => (
                <div key={id} className="flex flex-col">
                  <article
                    className="!rounded-lg h-[clamp(200px,22.5vw,359px)] bg-no-repeat pt-5 px-[23px] flex gap-1 aspect-[1.2/1]"
                    style={{ background: image }}>
                    <span className="rounded py-2 px-[10px] bg-[rgba(255,_255,_255,_0.20)] h-fit text-white cursor-pointer">
                      {health_scope_1}
                    </span>
                    <span className="rounded py-2 px-[10px] bg-[rgba(255,_255,_255,_0.20)] h-fit text-white cursor-pointer">
                      {health_scope_2}
                    </span>
                  </article>

                  <div className="flex justify-between max-w-[406px] items-center">
                    <section className="pt-[16px] flex gap-[14px]">
                      <Image
                        fill
                        className="!relative !w-12 !h-12 rounded-full cursor-pointer"
                        alt="Joanna Logo"
                        src="/joanna-image.png"
                      />

                      <article className="flex flex-col gap-[2px]">
                        <h2 className="font-sora text-lg/150 font-semibold">
                          Joanna Wellick
                        </h2>
                        <h5 className="font-jakarta text-sm/150 text-[#121416]">
                          Medical Doctor
                        </h5>
                      </article>
                    </section>

                    <time className="text-neutral-300 font-jakarta text-base/150">
                      Nov 28, 2023
                    </time>
                  </div>

                  <section className="w-[406px] flex flex-col gap-[10px]">
                    <h2 className="pt-4 pb-1 text-neutral-600 font-sora font-bold text-[26px]/150">
                      {title}
                    </h2>

                    <p className="text-[#5D6A85] font-jakarta text-base/150 max-w-[406px]">
                      Never miss a dose again! With our intuitive medication
                      reminder feature, managing your medication schedule has
                      never been easier. Simply input your medications, dosage
                      details, and preferred timings.
                    </p>
                  </section>
                  <section className="pt-5 flex justify-between max-w-[406px] items-center">
                    <Link
                      href="/"
                      className="text-primary-500 font-jakarta text-base/150 underline font-semibold">
                      Read Post
                    </Link>

                    <article className="flex gap-1 items-center">
                      <Clock size="24" color="#121416CF" />
                      <time className="text-[rgba(18,_20,_22,_0.81)] font-jakarta text-base/150">
                        {post_duration}
                      </time>
                    </article>
                  </section>
                </div>
              )
            )}
          </div>

          {/* <section className="bg-[url(/spiral-frame.png)] pl-144 flex items-center bg-cover bg-center w-full">
            <article className="flex flex-col gap-6">
              <h2 className="max-w-[531px] text-white text-4xl/150 font-bold font-sora">
                Leave medication reminders and tracking to us.
              </h2>

              <p className="text-white font-jakarta text-base/150 font-normal w-[587px]">
                Discover a seamless way to manage your health. Download our app
                today and gain access to intuitive features that help you stay
                on top of your medication regimen effortlessly. Experience
                personalized reminders, precise tracking, and easy communication
                with healthcare providers—all at your fingertips.
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
              className="!relative cursor-pointer w-1/2 h-fit"
              alt="Company Logo"
              src="/nurse.png"
            />
          </section> */}
        </div>
      </main>

      <footer className="flex flex-col">
        <div className="px-96 py-50 flex justify-between items-center flex-wrap">
          <section>
            <Image
              fill
              className="!relative !w-198 !h-74 aspect-[2.3/1] cursor-pointer"
              alt="Company Logo"
              src="/MediSync Logo.svg"
            />

            <p className="max-w-[405px] text-neutral-600 font-jakarta text-base/150 font-normal">
              MediSyncCare is a cutting-edge digital platform designed to
              address the challenges of medication adherence among individuals
              managing chronic conditions.
            </p>
            <figure className="pt-7 flex gap-45">
              <Image
                fill
                className="!relative !w-10 !h-10 cursor-pointer"
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
            <p className="font-jakarta text-base/150 font-normal text-neutral-600 max-w-[352px]">
              Subscribe to stay tuned for new web design and latest updates.
              Let&apos;s do it!
            </p>

            <form className="flex gap-2 items-center">
              <input
                type="email"
                className="py-[18px] pl-[17px] rounded-[60px] text-neutral-200 text-sm leading-normal bg-[#F6F6F6] pr-115"
                placeholder="Enter your Email Address"
              />

              <button
                type="submit"
                className="px-[26px] text-white bg-primary-500 h-56 rounded-[60px]">
                Subscribe
              </button>
            </form>
          </section>
        </div>

        <span className="text-neutral-600 font-jakarta text-base/150 self-center">
          &copy; 2023 All Rights Reserved
        </span>
      </footer>
    </div>
  );
}
