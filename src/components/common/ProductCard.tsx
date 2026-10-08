import Link from 'next/link'
import React from 'react'

const ProductCard = () => {
    return (
        <>
            <Link href={"/product/onion"}>
                <div className='border rounded-2xl border-base-300 bg-base-100 transition hover:border-primary-2 hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary'>
                    <div className='flex flex-col text-[14px] gap-3 p-5'>
                        <div className='flex items-start gap-3'>
                            <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-300 text-2xl">🧅</span>
                            <div className="min-w-0">
                                <h3 className="truncate text-base font-semibold">পেঁয়াজ</h3>
                                <p className="text-xs text-base-content/60">প্রতি কেজি</p>
                            </div>
                        </div>
                        <div className="flex items-end justify-between gap-2">
                            <div>
                                <p className="text-xs text-base-content/60">আজকের দাম</p>
                                <p className="text-xl font-bold">৫৪ <span className="text-sm font-medium">টাকা</span>
                                </p>
                            </div>
                            <span className="inline-flex items-center gap-1 rounded-full bg-base-300 px-2 py-1 text-xs font-semibold price-up" title="গতকালের তুলনায় বেড়েছে">
                                <span aria-hidden="true">▲</span>১২.৫%
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard