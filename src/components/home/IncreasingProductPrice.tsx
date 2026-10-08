import React from 'react'
import ProductCard from '../common/ProductCard'
import { ProductType } from '@/types/ProductTypes';

type IncreasingProductsProps = {
    products: ProductType[]
}

const IncreasingProductPrice = ({ products }: IncreasingProductsProps) => {

    const increasingPrices = products
        .filter((product: ProductType) => product.change.dir === "up")
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <section>
            <div className="mb-3 flex items-center gap-2">
                <span aria-hidden="true" className="text-error">▲</span>
                <h2 className="text-xl font-bold">আজ দাম বেড়েছে</h2>
            </div>
            <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {increasingPrices.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </ul>
        </section>
    )
}

export default IncreasingProductPrice