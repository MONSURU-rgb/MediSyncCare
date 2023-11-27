import Image from "next/image";

export function CoreFeatures() {
  return (
    <div
      className="py-144 flex flex-col gap-56 md:px-96 px-5"
      id="core-features">
      <h3 className="text-neutral-600 font-sora md:text-4xl/150 font-bold text-center whitespace-nowrap text-2xl/150">
        Our Core Features
      </h3>

      <section className="grid gap-[18px] [@media(min-width:1000px)]:grid-cols-3 [@media(max-width:999px)]:grid-cols-2 [@media(max-width:836px)]:!grid-cols-1">
        <article className="flex flex-col gap-5">
          <Image
            fill
            className="!relative w-full cursor-pointer aspect-[1.2/1] object-cover"
            alt="Company Logo"
            src="/set-medication-reminder.png"
          />

          <h3 className="text-neutral-600 font-sora text-[26px]/150 font-bold">
            Set Medication Reminders
          </h3>

          <p className="text-neutral-800 font-jakarta text-base font-normal max-w-[406px]">
            Never miss a dose again! With our intuitive medication reminder
            feature, managing your medication schedule has never been easier.
            Simply input your medications, dosage details, and preferred
            timings.
          </p>
        </article>
        <article className="flex flex-col gap-5">
          <Image
            fill
            className="!relative w-full cursor-pointer aspect-[1.2/1] object-cover"
            alt="Company Logo"
            src="/track-medication-intake.png"
          />

          <h3 className="text-neutral-600 font-sora text-[26px]/150 font-bold">
            Track Medication Intake
          </h3>

          <p className="text-neutral-800 font-jakarta text-base font-normal max-w-[406px]">
            Track and monitor your medication intake seamlessly through our
            dedicated intake tracker. Our app enables you to log each medication
            intake with a simple tap, providing you with a clear overview.
          </p>
        </article>
        <article className="flex flex-col gap-5">
          <Image
            fill
            className="!relative w-full cursor-pointer aspect-[1.2/1] object-cover"
            alt="Company Logo"
            src="/healthcare-collaboration.png"
          />

          <h3 className="text-neutral-600 font-sora text-[26px]/150 font-bold">
            Healthcare Collaboration
          </h3>

          <p className="text-neutral-800 font-jakarta text-base font-normal max-w-[406px]">
            This feature facilitates seamless communication and collaboration
            between patients and their healthcare providers within the app. It
            allows users to securely share medication adherence reports &
            updates.
          </p>
        </article>
      </section>
    </div>
  );
}
