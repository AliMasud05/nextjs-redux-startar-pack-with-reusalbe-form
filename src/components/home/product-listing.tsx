"use client"

import img1 from '@/assets/product/img1.png'
import img2 from '@/assets/product/img2.png'
import img3 from '@/assets/product/img3.png'
import img4 from '@/assets/product/img4.png'
import img5 from '@/assets/product/img5.png'
import img6 from '@/assets/product/img6.png'
import img7 from '@/assets/product/img7.png'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// Static products data
const products = [
  {
    id: 1,
    name: "Whitetails Women's Dress",
    category: "Clothing",
    originalPrice: 96.0,
    salePrice: 76.0,
    image: img1, // Use imported images
  },
  {
    id: 2,
    name: "Whitetails Women's Dress",
    category: "Clothing",
    originalPrice: 96.0,
    salePrice: 76.0,
    image: img2,
  },
  {
    id: 3,
    name: "Whitetails Women's Dress",
    category: "Clothing",
    originalPrice: 96.0,
    salePrice: 76.0,
    image: img3,
  },

  {
    id: 4,
    name: "Whitetails Women's Dress",
    category: "Clothing",
    originalPrice: 96.0,
    salePrice: 76.0,
    image: img4,
  },
  {
    id: 5,
    name: "Whitetails Women's Dress",
    category: "Clothing",
    originalPrice: 96.0,
    salePrice: 76.0,
    image: img5,
  },
  {
    id: 6,
    name: "Whitetails Women's Dress",
    category: "Clothing",
    originalPrice: 96.0,
    salePrice: 76.0,
    image: img6,
  },
  {
    id: 7,
    name: "Whitetails Women's Dress",
    category: "Clothing",
    originalPrice: 96.0,
    salePrice: 76.0,
    image: img7,
  },
  {
    id: 8,
    name: "Whitetails Women's Dress",
    category: "Clothing",
    originalPrice: 96.0,
    salePrice: 76.0,
    image: img3,
  },
]

const categories = [
  { id: 1, name: "All Products" },
  { id: 2, name: "Women's & Girls' Fashion" },
  { id: 3, name: "Men's & Boys' Fashion" },
  { id: 4, name: "Electronic Accessories" },
  { id: 5, name: "TV & Home Appliances" },
  { id: 6, name: "Electronics Device" },
  { id: 7, name: "Mother & Baby" },
  { id: 8, name: "Sports & Outdoors" },
]

export default function ProductListing() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showCategories, setShowCategories] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Products")

  const toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  const selectCategory = (categoryName: string) => {
    setSelectedCategory(categoryName)
    setShowCategories(false)
  }

  return (
    <div>
      <div className="container mx-auto px-4 py-16 ">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-black dark:text-primary">
            <span className="border-l-4 border-orange-500 pr-2"></span>
            OUR PRODUCTS
          </h1>
          <p className="text-[#666] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-6 border-1  border-[#E7E7E7] dark:border-white py-2 px-2 rounded-sm dark:border-0 dark:bg-white/10" >
          <div className="relative ">
            <Button variant="ghost" className="text-orange-500 flex items-center text-lg mt-1 font-medium" onClick={toggleCategories}>
              Categories
              <span className="ml-2">
                {showCategories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </span>
            </Button>

            {showCategories && (
              <div className="absolute z-10 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-200">
                <ul className="py-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          selectedCategory === category.name ? "text-orange-500 font-medium" : "text-gray-600"
                        }`}
                        onClick={() => selectCategory(category.name)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-white" />
            </div>
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-gray-100 dark:bg-[#1F1E1F] rounded-md py-3 pl-10 pr-4 focus:outline-none text-black dark:placeholder:text-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* <div className="flex justify-center mt-10">
            <Button  className="border-1 border-black bg-green">Explore More</Button>
          </div> */}
          <div className="flex justify-center mt-10">
            <Button  className="border-1 border-black dark:border-white bg-green text-black dark:text-white bg-white  dark:bg-black 
            ">
             <span className='hover:text-black'> Explore More</span>
              </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: any }) {
  return (
    <Card className="w-full max-w-[350px] overflow-hidden rounded-3xl shadow-sm  bg-white dark:bg-[#1F1E1F] dark:border-1 dark:border-[#4DB0DB]/20 px-4 pt-4 ">
      <CardContent className="p-0">
        <div className="bg-[#F3F3F3] dark:bg-[#343435] p-6 rounded-2xl">
          <Image
            src={product.image} // Use imported image
            alt={product.name}
            width={300}
            height={500}
            className="w-full object-contain rounded-sm h-60"
          />
        </div>
        <div className="px-6 pt-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-500 dark:text-[#B9B9B9]">{product.category}</p>
            <h3 className="text-xl font-medium text-gray-900 dark:text-[#E7E7E7]">{product.name}</h3>
            <div className="flex flex-col  gap-1">
              <span className="text-lg font-medium text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              <span className="text-xl font-medium text-amber-500">${product.salePrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
