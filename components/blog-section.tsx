import { ArticleData, dataForBlogSection } from "@/utils/data";
import { Clock } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";

export function BlogSection({
  title,
  data,
}: {
  title: string;
  data: ArticleData[];
}) {
  return (
    <div
      className="py-140 flex flex-col gap-8 md:px-96 px-5 scroll-smooth"
      id="blog-post">
      <h3 className="text-neutral-600 text-sora text-4xl/150 font-bold  ">
        {title}
      </h3>
      {/* className="flex gap-4 md:px-96 px-5 justify-between" */}
      <div className="grid [@media(max-width:1099px)]:grid-cols-2 [@media(min-width:1100px)]:grid-cols-3 gap-6 [@media(max-width:865px)]:!grid-cols-1">
        {data.map(
          (
            {
              image,
              health_scope_1,
              health_scope_2,
              title,
              post_duration,
              writer,
            },
            id
          ) => (
            <div key={id} className="flex flex-col">
              <article
                className="!rounded-lg h-[359px] pt-5 px-[13px] flex gap-1 !bg-cover !bg-[center] !bg-no-repeat"
                style={{ background: image }}>
                <span className="rounded py-2 px-[10px] bg-[rgba(255,_255,_255,_0.20)] h-fit text-white cursor-pointer">
                  {health_scope_1}
                </span>
                <span className="rounded py-2 px-[10px] bg-[rgba(255,_255,_255,_0.20)] h-fit text-white cursor-pointer">
                  {health_scope_2}
                </span>
              </article>

              <div className="flex justify-between md:max-w-[406px] items-center">
                <section className="pt-[16px] flex gap-[14px]">
                  <Image
                    fill
                    className="!relative !w-12 !h-12 rounded-full cursor-pointer"
                    alt="Joanna Logo"
                    src="/joanna-image.png"
                  />

                  <article className="flex flex-col gap-[2px]">
                    <h2 className="font-sora text-lg/150 font-semibold">
                      {writer ? writer : "Joanna Wellick"}
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

              <section className="md:max-w-[406px] flex flex-col gap-[10px]">
                <h2 className="pt-4 pb-1 text-neutral-600 font-sora font-bold text-[26px]/150">
                  {title}
                </h2>

                <p className="text-[#5D6A85] font-jakarta text-base/150 md:max-w-[406px]">
                  Never miss a dose again! With our intuitive medication
                  reminder feature, managing your medication schedule has never
                  been easier. Simply input your medications, dosage details,
                  and preferred timings.
                </p>
              </section>
              <section className="pt-5 flex justify-between max-w-[406px] items-center">
                <Link
                  href={
                    title === "How To Always Track Your Medicine Intake."
                      ? "/track-your-medicine-intake"
                      : "/track-your-medicine-intake"
                  }
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
    </div>
  );
}
