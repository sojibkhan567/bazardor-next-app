import Link from 'next/link'
import React from 'react'

const ProductDetailsPage = () => {
  return (
    <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6'>
      {/** page breadcrumb */}
      <nav aria-label="ব্রেডক্রাম্ব" className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link href="/">হোম</Link>
          </li>
          <li>
            <Link href="/category/chal">চাল</Link>
          </li>
          <li>স্বর্ণমাছি চাল</li>
        </ul>
      </nav>
      
    </div>
  )
}

export default ProductDetailsPage