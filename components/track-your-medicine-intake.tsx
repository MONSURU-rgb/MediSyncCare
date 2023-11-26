import { Clock } from "iconsax-react";
import { BlogSection, DetailedOverview, Footer, Header, Quote } from ".";
import Image from "next/image";
import {
  dataForBlogSection,
  dataForMedicineTrackingBlogSection,
} from "@/utils/data";

export function TrackYourMedicineIntake() {
  return (
    <div className="flex flex-col">
      {" "}
      <Header />
      <main>
        <div className="pt-81 flex flex-col gap-4 justify-center !items-center">
          <h4 className="font-jakarta text-lg font-semibold text-primary-500 text-center">
            Inside MediSyncCare
          </h4>
          <div className="flex flex-col gap-5 items-center max-[500px]:px-5">
            <h2 className="max-w-[662px] text-neutral-600 font-sora text-[42px]/150 font-bold text-center">
              How To Always Track Your Medicine Intake.
            </h2>

            <section className="flex gap-5 pb-81 justify-center items-center">
              <time className="text-neutral-300 font-jakarta text-base/150">
                Nov 28, 2023
              </time>

              <span className="w-[6px] h-[6px] rounded-full bg-[#D9D9D9]"></span>

              <article className="flex gap-1 items-center">
                <Clock size="24" color="#121416CF" />
                <time className="text-[rgba(18,_20,_22,_0.81)] font-jakarta text-base/150">
                  2 minute read
                </time>
              </article>
            </section>
          </div>

          <div className="flex gap-45 flex-col max-[800px]:px-5">
            <article
              className="!rounded-lg h-[562px] pt-5 px-[13px] flex gap-1 !bg-cover !bg-[center] !bg-no-repeat w-[clamp(400px,84vw,1027px)] max-[500px]:w-full max-[500px]:hidden"
              style={{ background: "url(/mobile-health.png)" }}>
              <span className="rounded py-2 px-[10px] bg-[rgba(0,_0,_0,_0.20)] h-fit text-white cursor-pointer">
                Mobile Health
              </span>
              <span className="rounded py-2 px-[10px] bg-[rgba(0, 0, 0, 0.20)] h-fit text-white cursor-pointer">
                Health Managment
              </span>
            </article>

            <div className="flex justify-between max-[800px]:flex-col max-[800px]:gap-5">
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

              <section className="max-w-[clamp(400px,43.4vw,700px)] text-[#121416] flex flex-col gap-20 font-jakarta text-base/200 font-normal max-[800px]:max-w-full">
                <article className="flex flex-col gap-4">
                  <p>
                    Managing medication intake consistently is vital for
                    sustaining health, especially for individuals managing
                    chronic conditions. While medication tracking apps offer
                    convenience, several practical methods beyond digital
                    solutions can assist in this crucial process.
                  </p>

                  <p>
                    {" "}
                    <span className="font-bold">Pill organizers</span>, a
                    traditional yet highly effective method, provide a tangible
                    way to arrange and track daily doses. These physical
                    containers, segmented into days or times, offer a visual
                    reminder of whether a dose has been taken. They provide a
                    straightforward method that doesn’t rely on technology.
                  </p>
                  <p>
                    {" "}
                    Another option is{" "}
                    <span className="font-bold">
                      maintaining a written medication journal or log
                    </span>
                    . This manual tracking method allows for flexibility and
                    customization. By noting down medication names, dosages, and
                    the time each dose is taken, individuals can create a
                    personalized system that suits their preferences.
                  </p>

                  <p>
                    {" "}
                    Leveraging alarms or timers on a phone or dedicated device
                    can serve as auditory or visual cues for medication intake.
                    Setting reminders through these devices ensures timely
                    doses, even without the need for a specific app.
                  </p>
                </article>
                <section className="flex flex-col gap-10">
                  <article className="flex gap-6 items-start">
                    <Quote />

                    <blockquote className="font-sora text-4xl uppercase font-semibold max-[400px]:hidden">
                      Learning different methods of tracking enhances our
                      commitment to health management
                    </blockquote>
                    <blockquote className="hidden font-sora text-2xl uppercase font-semibold max-[400px]:block">
                      Learning different methods of tracking enhances our
                      commitment to health management
                    </blockquote>
                  </article>

                  <p className=" font-sora text-[18px]/180">
                    In conclusion, embracing diverse methods for tracking
                    medicine intake offers a personalized approach to adherence.
                    Each method caters to different preferences and lifestyles,
                    ensuring consistent medication intake tracking. By exploring
                    these alternatives, individuals enhance their commitment to
                    sustained health management, enriching their understanding
                    of effective health practices.
                  </p>
                </section>
              </section>
            </div>
          </div>
        </div>

        <BlogSection
          title="You may also like"
          data={dataForMedicineTrackingBlogSection}
        />

        <DetailedOverview />
      </main>
      <Footer />
    </div>
  );
}
