import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BrandShowcase = () => {
  return (
    <div id="webcrumbs " className=" pb-16    bg-white dark:bg-black">
      <div className="relative w-full  py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className=" mb-8 ">
            <Link
              href="/"
              className="text-transparent font-bold text-3xl"
              style={{
                background:
                  "linear-gradient(100deg, #FFA929 31.75%, #9A63C5 94.48%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              LXRY
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full ">
              <div className="grid grid-cols-5 gap-3 md:gap-4 lg:gap-5 h-[400px] lg:min-w-[600px]">
                {/* First column */}
                <div className="col-span-1 flex flex-col gap-2">
                  <div className="relative rounded-lg overflow-hidden h-full shadow-md hover:shadow-lg transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                      alt="Woman in red top"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>

                {/* Second column */}
                <div className="col-span-1 flex flex-col gap-3">
                  <div className="relative rounded-lg overflow-hidden h-2/7 transition-all duration-300">
                    {/* <Image
                                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
                                            alt="Fashion model"
                                            className="w-full h-full object-cover"
                                            width={400}
                                            height={400}
                                        /> */}
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-5/7 shadow-md hover:shadow-lg transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93"
                      alt="Person outdoors"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>

                {/* Third column */}

                <div className="col-span-1 flex flex-col gap-3">
                  <div className="relative rounded-lg overflow-hidden h-1/2 shadow-md hover:shadow-lg transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93"
                      alt="Person in gray"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-1/2 shadow-md hover:shadow-lg transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8"
                      alt="Person at beach"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>

                {/* Fourth column */}
                <div className="col-span-1 flex flex-col gap-3">
                  <div className="relative rounded-lg overflow-hidden h-2/7 transition-all duration-300">
                    {/* <Image
                                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
                                            alt="Fashion model"
                                            className="w-full h-full object-cover"
                                            width={400}
                                            height={400}
                                        /> */}
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-5/7 shadow-md hover:shadow-lg transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93"
                      alt="Person outdoors"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>

                {/* Fifth column */}
                <div className="col-span-1 flex flex-col gap-3">
                  <div className="relative rounded-lg overflow-hidden h-1/2 shadow-md hover:shadow-lg transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
                      alt="Fashion portrait"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-1/2 shadow-md hover:shadow-lg transition-all duration-300">
                    <Image
                      src="https://images.unsplash.com/photo-1506634572416-48cdfe530110"
                      alt="Style model"
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
                {/* Next: "Add hover overlay with brand names on images" */}
              </div>
            </div>
            {/* Tagline */}
          </div>
          <div className=" text-right mt-20 md:mt-40 lg:mt-96 ">
          <p className="text-md  max-w-sm ml-auto text-black dark:text-white">
            Expanding your brand&apos visibility with seamless e-commerce solutions.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};
