"use client"

import { Heart } from "lucide-react"

interface FavoriteButtonProps {
  isFavorite: boolean
  onToggle: () => void
}

export default function FavoriteButton({
  isFavorite,
  onToggle,
}: FavoriteButtonProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle favorite"
      className="p-2 rounded-full hover:bg-gray-100"
    >
      <Heart
        className={`h-5 w-5 transition ${
          isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
        }`}
      />
    </button>
  )
}
