"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import testimonial_img from '@/assets/Testimonials/Testimonials-img.png'

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Happy Client",
    image:testimonial_img,
    quote:
      '" Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue."',
    rating: 5,
  },
  {
    id: 2,
    name: "Robert Fox",
    role: "Happy Client",
    image:testimonial_img,
    quote:
      '" Suspendisse sit amet neque euismod, convallis quam eget, dignissim massa. Aliquam blandit risus purus, in congue."',
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Happy Client",
    image:testimonial_img,
    quote:
      '" Exceptional service and quality. I couldn\'t be happier with the results. Highly recommend to anyone looking for excellence."',
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Happy Client",
    image:testimonial_img,
    quote:
      '" Professional, responsive, and delivered beyond my expectations. The attention to detail really sets them apart from competitors."',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slidesPerView = 2
  const totalSlides = Math.ceil(testimonials.length / slidesPerView)

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIdx = currentSlide * slidesPerView
    return testimonials.slice(startIdx, startIdx + slidesPerView)
  }

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getCurrentTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="bg-[#D9D9D9] dark:bg-[#1F1E1F] rounded-lg  shadow-sm h-80">
                <div className="flex  mb-4">
                  <div className="mr-4  overflow-hidden w-28 h-28  
                  ">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="object-cover w-full h-full rounded-2xl"
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="font-literata font-medium text-[#1C1A1D] text-2xl leading-[32px] dark:text-primary ">{testimonial.name}</h4>
                    <p className=" text-[var(--preview-themeforest-net-dove-gray,var(--color-grey-44,#707070))] text-[16px] font-[var(--font-weight-400,400)] leading-[var(--line-height-29,29px)]"
                    >{testimonial.role}</p>
                  </div>
                </div>
               <div className="px-6 py-8">
               <p className="text-gray-600 mb-4 text-sm max-w-96 leading-8">{testimonial.quote}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                    />
                  ))}
                </div>
               </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalSlides)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentSlide ? "bg-amber-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
