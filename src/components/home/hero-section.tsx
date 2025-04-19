"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import hero from '@/assets/home/hero.png'

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(${hero.src})`,
                      backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex min-h-screen flex-col items-start justify-center px-4">
        <div className="mt-20 max-w-xl">
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-amber-400">
            New Arrival
          </span>
          <h1 className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl">
            Discover Our <br />
            New Collection
          </h1>
          <p className="mb-8 max-w-md text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          {/* Search and Categories */}
          <div className="flex w-full flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between rounded-md bg-gray-800/80 px-4 py-3 text-sm text-white backdrop-blur-sm sm:w-auto"
              >
                Categories
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>

              {isOpen && (
                <div className="absolute mt-1 w-full rounded-md bg-gray-800 py-1 shadow-lg">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    Bags
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    Accessories
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700">
                    Clothing
                  </a>
                </div>
              )}
            </div>

            <div className="flex w-full flex-1">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full flex-1 rounded-l-md border-0 bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 backdrop-blur-sm focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button className="flex items-center justify-center rounded-r-md bg-amber-500 px-4 py-3 text-white">
                <Search className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
