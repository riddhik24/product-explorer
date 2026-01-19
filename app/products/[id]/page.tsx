import Image from "next/image";
import { getProduct } from "../../lib/api"

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetails({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id
  const product = await getProduct(id)

  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      <Image width={100} height={80} src={product?.image} alt="product image"className="w-full h-80 object-contain" />
      <h1 className="text-2xl font-bold mt-4">{product?.title}</h1>
      <p className="text-gray-600 mt-2">{product?.category}</p>
      <p className="mt-4">{product?.description}</p>
      <p className="mt-4 text-xl font-semibold">${product?.price}</p>
    </div>
  )
}
