"use client"
import ProductCard from './ProductCard'
import { ProductType } from '@/types/ProductTypes'
import { convertToBanglaNumber } from '@/utils/formatNumber'
import { useMemo, useState } from 'react'

const SortingProduct = ({ products }: { products: ProductType[] }) => {

    const [sortOrder, setSortOrder] = useState("default");
    // sort the list of product
    const sortedProducts = useMemo(() => {
        const result = [...products];

        switch (sortOrder) {
            case "price-asc":
                return result.sort((a, b) => a.today - b.today);
            case "price-desc":
                return result.sort((a, b) => b.today - a.today);
            default:
                return result;
        }
    }, [products, sortOrder]);

    // if product is empty
    if (products.length === 0) {
        return (<h1 className='text-2xl font-bold text-gray-700 text-center'>Category has no Products!</h1>)
    }

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <p className="text-sm text-base-content/70" aria-live="polite">মোট {convertToBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে</p>

                <div className="flex items-center gap-2">
                    <label className="text-sm text-base-content/70" htmlFor="sort-products">সাজান</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        id="sort-products"
                        className="select select-bordered select-sm active:outline-none"
                    >
                        <option value="default">ডিফল্ট</option>
                        <option value="price-asc">দাম: কম থেকে বেশি</option>
                        <option value="price-desc">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((product) => (
                    <li key={product.id}>
                        <ProductCard product={product} />
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SortingProduct