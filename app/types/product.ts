export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string;
  thumbnail: string;
}

export interface ProductsResponse {
  products: Product[];
}
