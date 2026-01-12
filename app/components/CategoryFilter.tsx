"use client"

import { Product } from "../types/product"

interface CategoryFilterProps {
  products: Product[]
  value: string
  onChange: (category: string) => void
}

export default function CategoryFilter({
  products,
  value,
  onChange,
}: CategoryFilterProps) {
  const categories = Array.from(
    new Set(products.map((p) => p.category))
  )

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-2xl px-4 py-2"
      aria-label="Filter by category"
    >
      <option value="all">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}
