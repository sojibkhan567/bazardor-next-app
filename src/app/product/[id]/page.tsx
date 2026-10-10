import ProductCategoryDetails from '@/components/product/ProductCategoryDetails';
import ProductMarketDetails from '@/components/product/ProductMarketDetails';
import ProductStatistics from '@/components/product/ProductStatistics';
import { ProductType } from '@/types/ProductTypes';
import { changeUnitBangla } from '@/utils/formatNumber';
import { Metadata } from 'next';
import Link from 'next/link'
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ id: string; }>;
}

// fetch single product data by slug
const getSingleProduct = async (id: string): Promise<ProductType> => {
  const res = await fetch(`${process.env.BASE_URL}/products/${id}`);

  if (res.status === 404) {
    notFound();
  }

  const product: ProductType | null = await res.json();

  if (!product || !product.id) {
    notFound();
  }

  return product;
}

// generate meta data 
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getSingleProduct(id);

  return {
    title: `${product.nameBn} এর আজকের দাম | বাজার দর`,
    description: `${product.nameBn} — ${product.today} টাকা প্রতি ${changeUnitBangla(product.unit)}। বাজারভিত্তিক দাম, গড়, সর্বনিম্ন-সর্বাধিক ও সময়ের তুলনা।`,
  };
}

const ProductDetailsPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  // fetch product
  const product = await getSingleProduct(id);
  console.log(product)
  if (!product) {
    return notFound();
  }

  return (
    <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6'>
      {/** page breadcrumb */}
      <nav aria-label="ব্রেডক্রাম্ব" className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href={`/category/${product.category}`}>{product.categoryNameBn}</Link>
          </li>
          <li>{product.nameBn}</li>
        </ul>
      </nav>

      {/** category header title */}
      <ProductCategoryDetails product={product} />

      {/** product details section */}
      <div className='rounded-2xl border border-base-300 bg-base-100 p-6'>
        <div className='flex flex-col gap-6'>

          {/** products statistics sections */}
          <ProductStatistics product={product} />

          {/** market details section */}
          <ProductMarketDetails product={product} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center justify-center">
        <Link className="btn btn-primary-2" href={`/category/${product.category}`}>{product.categoryIcon} সব {product.categoryNameBn}</Link>
      </div>

    </div>
  )
}

export default ProductDetailsPage