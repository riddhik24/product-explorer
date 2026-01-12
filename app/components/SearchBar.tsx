"use client"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-80 border rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Search products"
    />
  )
}
