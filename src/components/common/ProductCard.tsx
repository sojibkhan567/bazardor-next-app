"use client"
import { changeUnitBangla, convertToBanglaNumber } from '@/lib/formatNumber';
import { ProductType } from '@/types/ProductTypes'
import Link from 'next/link'

const ProductCard = ({ product }: { product: ProductType }) => {
    if (!product) {
        return "No data found";
    }
    return (
        <>
            <Link href={`/product/${product.slug}`}>
                <div className='border rounded-2xl border-base-300 bg-base-100 transition hover:border-primary-2 hover:shadow-md focus-visible:outline-2 focus-visible:outline-primary'>
                    <div className='flex flex-col text-[14px] gap-3 p-5'>
                        <div className='flex items-start gap-3'>
                            <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-xl bg-base-300 text-2xl">{product.image}</span>
                            <div className="min-w-0">
                                <h3 className="truncate text-base font-semibold">{product.nameBn}</h3>
                                <p className="text-xs text-base-content/60">প্রতি {changeUnitBangla(product.unit)}</p>
                            </div>
                        </div>
                        <div className="flex items-end justify-between gap-2">
                            <div>
                                <p className="text-xs text-base-content/60">আজকের দাম</p>
                                <p className="text-xl font-bold">{convertToBanglaNumber(product.today)} <span className="text-sm font-medium">টাকা</span>
                                </p>
                            </div>
                            {product.change.dir === "up" ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-base-300 px-2 py-1 text-xs font-semibold price-up" title="গতকালের তুলনায় বেড়েছে">
                                    <span aria-hidden="true">▲</span>
                                    {convertToBanglaNumber(product.change.pct)}%
                                </span>
                            ) : product.change.dir === "down" ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-down" title="গতকালের তুলনায় কমেছে">
                                    <span aria-hidden="true">▼</span>
                                    {convertToBanglaNumber(product.change.pct)}%
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1 rounded-full bg-base-200 px-2 py-1 text-xs font-semibold price-flat" title="গতকালের তুলনায় অপরিবর্তিত">
                                    <span aria-hidden="true">—</span>
                                    ০.০%
                                </span>
                            )}

                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard