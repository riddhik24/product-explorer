"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "../types/product"
import FavoriteButton from "./FavoriteButton"

interface ProductCardProps {
  product: Product
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {

  return (
    <div className="border rounded-lg shadow-sm hover:shadow-lg transition h-full flex flex-col">
      <div className="relative">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-40 object-contain p-4"
        />

        <div className="absolute top-2 right-2">
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={() => onToggleFavorite(product.id)}
          />
        </div>
      </div>

      <div className="px-4 flex-1">
        <h2 className="text-sm font-medium line-clamp-2">
          {product.title}
        </h2>
        <p className="font-semibold mt-1">${product.price}</p>
        <p className="text-xs text-gray-500">{product.category}</p>
      </div>

<h1 className="border-t mt-2"></h1>
      <Link
        href={`/products/${product.id}`}
        className="mt-auto px-4 py-3 text-center text-blue-600 font-medium hover:scale-105 duration-300 hover:underline"
      >
        View Details
      </Link>
    </div>
  )
}
