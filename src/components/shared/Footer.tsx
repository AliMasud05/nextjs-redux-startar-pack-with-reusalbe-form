import Image from "next/image"
import Link from "next/link"
import img1 from '@/assets/footer/img1.png'
import img2 from '@/assets/footer/img2.png'
import img3 from '@/assets/footer/img3.png'

export default function Footer() {
  return (
    <footer className="bg-[#003049] dark:bg-black text-white py-12 border-t-1 border-black dark:border-[#06202B]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Column - Company Info */}
          <div className="mb-8 md:mb-0 max-w-xs flex flex-col gap-4">
            <h2 className="dark:text-white text-primary text-[24px] font-bold leading-normal"
            >Lx, RY.Life</h2>
            <p className="text-primary dark:text-white text-sm mb-6">
              Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
            <h3 className=" font-medium text-3xl">Follow Us</h3>
            {/* Social media icons would go here */}
          </div>

          {/* Right Column - Instagram Shop */}
          <div>
            <h2 className="text-2xl font-medium leading-3 mb-6">Instagram Shop</h2>
            <div className="grid grid-cols-3 gap-2">
              <Link href="#" className="block overflow-hidden rounded-sm">
                <Image
                  src={img1}
                  alt="Instagram shop item 1"
                  width={120}
                  height={120}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#" className="block overflow-hidden rounded-sm">
                <Image
                  src={img2}
                  alt="Instagram shop item 2"
                  width={120}
                  height={120}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="#" className="block overflow-hidden rounded-sm">
                <Image
                  src={img3}
                  alt="Instagram shop item 3"
                  width={120}
                  height={120}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center  text-sm text-gray-400">© 2023 LXRY</div>
      </div>
    </footer>
  )
}
