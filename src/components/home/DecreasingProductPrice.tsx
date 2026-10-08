import React from 'react'
import ProductCard from '../common/ProductCard'

const DecreasingProductPrice = () => {
  return (
      <section>
          <div className="mb-3 flex items-center gap-2">
              <span aria-hidden="true" className="text-success">▼</span>
              <h2 className="text-xl font-bold">আজ দাম কমেছে</h2>
          </div>
          <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              <li className='contents'>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
              </li>
          </ul>
      </section>
  )
}

export default DecreasingProductPrice