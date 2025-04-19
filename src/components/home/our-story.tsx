import Image from "next/image"
import img1 from '@/assets/our-story/img1.png'
import img2 from '@/assets/our-story/img2.png'
import img3 from '@/assets/our-story/img3.png'

export default function OurStory() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center mb-8">
          <h3 className="text-amber-500 font-medium uppercase tracking-wide">OUR STORY</h3>
          <div className="ml-2 w-6 h-0.5 bg-green-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Heading and Image */}
          <div className="flex flex-col">
            <div className="mb-8">
              <h2 className="text-[#272222] dark:text-primary text-[34px] font-semibold leading-[124%]"
              >
                Your Vision Our Expertise
                <br />
                Your Success Get Noticed
                <br />
                Generate <span className="text-amber-500">Leads Dominate.</span>
              </h2>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={img1.src}
                alt="Couple embracing on couch"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Two Images and Text */}
          <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={img2.src}
                  alt="Couple with laptop"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src={img3.src}
                  alt="Couple embracing in kitchen"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-gray-600 text-sm">
              <p className="text-[#272222] dark:text-primary text-md font-medium leading-[124%]"
              >
                Tempor commodo ullamcorper a lacus. Arcu amet commodo nulla facilisi nullam. Molestie nunc non blandit
                massa enim nec. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
