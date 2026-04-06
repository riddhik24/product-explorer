import { Product, ProductsResponse } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed to fetch products");
    return [];
  }
  const data: ProductsResponse = await res.json();
  return data.products;
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Failed to fetch product: ${res.status}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
