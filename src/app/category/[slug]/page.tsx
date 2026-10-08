import SortingProduct from '@/components/common/SortingProduct'
import React from 'react'

const CategoryPage = () => {
    return (
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6">
            <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="text-4xl">🐟</span>
                    <div>
                        <h1 className="text-2xl font-bold mb-2">মাছ</h1>
                        <p className="text-sm text-base-content/70">৫টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
            </header>

            <SortingProduct />
        </div>
    )
}

export default CategoryPage