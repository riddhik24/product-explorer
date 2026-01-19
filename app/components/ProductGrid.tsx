"use client"

import { useEffect, useState } from "react"
import { Product } from "../types/product"
import ProductCard from "./ProductCard"
import { getFavorites, saveFavorites } from "../lib/storage"
import FavoritesFilter from "./FavoritesFilter"

interface Props {
  products: Product[]
}
 
export default function ProductGrid({ products }: Props) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id]

    setFavorites(updated)
    saveFavorites(updated)
  }

  const visibleProducts = showOnlyFavorites
    ? products.filter((p) => favorites.includes(p.id))
    : products

  return (
    <div>
      <div className="flex gap-4 mb-6 justify-end">
        <FavoritesFilter
          showOnlyFavorites={showOnlyFavorites}
          onToggle={() => setShowOnlyFavorites(!showOnlyFavorites)}
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleProducts.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No favorite products found
          </p>
        ) : (
          visibleProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              isFavorite={favorites.includes(prod.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  )
}
