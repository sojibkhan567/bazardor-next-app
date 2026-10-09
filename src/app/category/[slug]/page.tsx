import SortingProduct from '@/components/common/SortingProduct'
import { ProductType } from '@/types/ProductTypes';

interface CategoryTypes {
    id: string
    slug: string,
    nameBn: string,
    icon: string
}

interface CategoryPageProps {
    params: Promise<{ slug: string; }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;

    // fetch single category by slug
    const res = await fetch(`${process.env.BASE_URL}/categories/${slug}`);
    const data = await res.json();
    const categroy: CategoryTypes = data;

    if (!categroy) {
        return "No Data Found"
    }

    // fecth similar product by category
    const response = await fetch(`${process.env.BASE_URL}/products?category=${slug}`);
    const productData: ProductType[] = await response.json();

    if (!productData) {
        return "No Data Found"
    }

    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
            <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-4xl">{categroy.icon}</span>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">{categroy.nameBn}</h1>
                        <p className="text-sm text-base-content/70">৫টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
            </header>

            <SortingProduct products={productData} />
        </div>
    )
}

export default CategoryPage