import AllProducts from "@/components/home/AllProducts";
import Banner from "@/components/home/Banner";
import DecreasingProductPrice from "@/components/home/DecreasingProductPrice";
import IncreasingProductPrice from "@/components/home/IncreasingProductPrice";
import { ProductType } from "@/types/ProductTypes";
import { notFound } from "next/navigation";


export default async function Home() {

  // get all products data
  const res = await fetch(`${process.env.BASE_URL}/products`);

  if (res.status === 404) {
    return notFound();
  }

  const products: ProductType[] = await res.json();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
      <Banner />

      <IncreasingProductPrice products={products} />

      <DecreasingProductPrice products={products} />

      <AllProducts products={products} />
    </div>
  );
}
