"use client"

interface FavoritesFilterProps {
  showOnlyFavorites: boolean
  onToggle: () => void
}

export default function FavoritesFilter({
  showOnlyFavorites,
  onToggle,
}: FavoritesFilterProps) {
  return (
    <button
      onClick={onToggle}
      className={`px-4 py-2 rounded-2xl border cursor-pointer hover:scale-105 duration-300 ${
        showOnlyFavorites
          ? "bg-red-500 text-white"
          : "bg-white text-gray-700"
      }`}
    >
      {showOnlyFavorites ? "Showing Favorites" : "Show Favorites"}
    </button>
  )
}
