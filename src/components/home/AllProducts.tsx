import React from 'react'
import SortingProduct from '../common/SortingProduct'
import { ProductType } from '@/types/ProductTypes'

type AllProductsProps = {
    products: ProductType[]
}

const AllProducts = ({ products }: AllProductsProps) => {
    return (
        <section id='সব-পণ্য' className='scroll-mt-32'>
            <h2 className="mb-3 text-xl font-bold">সব পণ্য</h2>

            <SortingProduct products={products} />
        </section>
    )
}

export default AllProducts