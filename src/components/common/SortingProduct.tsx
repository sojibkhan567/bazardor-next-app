import React from 'react'
import ProductCard from './ProductCard'

const SortingProduct = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
                <p className="text-sm text-base-content/70" aria-live="polite">মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>

                <div className="flex items-center gap-2">
                    <label className="text-sm text-base-content/70" htmlFor="sort-products">সাজান</label>
                    <select id="sort-products" className="select select-bordered select-sm active:outline-none">
                        <option value="default">ডিফল্ট</option>
                        <option value="price-asc">দাম: কম থেকে বেশি</option>
                        <option value="price-desc">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <li className='contents'>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
                <li>
                    <ProductCard />
                </li>
            </ul>
        </div>
    )
}

export default SortingProduct