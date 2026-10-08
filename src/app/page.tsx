import AllProducts from "@/components/home/AllProducts";
import Banner from "@/components/home/Banner";
import DecreasingProductPrice from "@/components/home/DecreasingProductPrice";
import IncreasingProductPrice from "@/components/home/IncreasingProductPrice";
import { ProductType } from "@/types/ProductTypes";


export default async function Home() {

  // get all products data
  const res = await fetch(`${process.env.BASE_URL}/products`);
  const data = await res.json();
  const products: ProductType[] = data;

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
      <Banner />

      <IncreasingProductPrice products={products} />

      <DecreasingProductPrice products={products} />

      <AllProducts products={products} />
    </div>
  );
}
