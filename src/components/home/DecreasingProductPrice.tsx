import React from 'react'
import ProductCard from '../common/ProductCard'
import { ProductType } from '@/types/ProductTypes';

const DecreasingProductPrice = ({ products }: { products: ProductType[] }) => {

    const decreasingPrices = products
        .filter((product: ProductType) => product.change.dir === "down")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <section>
            <div className="mb-3 flex items-center gap-2">
                <span aria-hidden="true" className="text-success">▼</span>
                <h2 className="text-xl font-bold">আজ দাম কমেছে</h2>
            </div>
            <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {decreasingPrices.map((product) => (
                    <li key={product.id} className='contents'>
                        <ProductCard product={product} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default DecreasingProductPrice