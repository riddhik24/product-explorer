import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  const text = await res.text();

  if (!text) {
    throw new Error("Empty response from API");
  }

  return JSON.parse(text);
}
