import SortingProduct from '@/components/common/SortingProduct'
import { ProductType } from '@/types/ProductTypes';
import { convertToBanglaNumber } from '@/utils/formatNumber';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface CategoryTypes {
    id: string
    slug: string,
    nameBn: string,
    icon: string
}

interface CategoryPageProps {
    params: Promise<{ slug: string; }>;
}

// fetch single category by slug
const getCategory = async (slug: string): Promise<CategoryTypes> => {
    const res = await fetch(`${process.env.BASE_URL}/categories/${slug}`);
    if (res.status === 404) {
        return notFound();
    }
    return res.json();
}

// generate meta data 
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const category = await getCategory(slug);

    return {
        title: `${category.nameBn} এর আজকের দাম | বাজার দর`,
        description: `${category.nameBn} ক্যাটাগরির সব পণ্যের আজকের দাম ও দামের পরিবর্তন।`,
    };
}


const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;

    // fetch single category by slug
    const category = await getCategory(slug);
    if (!category) {
        return notFound();
    }

    // fecth similar product by category
    const response = await fetch(`${process.env.BASE_URL}/products?category=${slug}`);
    const productData: ProductType[] = await response.json();

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
            <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-4xl">{category.icon}</span>
                    <div>
                        <h1 className="text-2xl font-bold mb-1">{category.nameBn}</h1>
                        <p className="text-sm text-base-content/70">{convertToBanglaNumber(productData.length)} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
            </header>

            <SortingProduct products={productData} />
        </div>
    )
}

export default CategoryPage