import { ProductType } from '@/types/ProductTypes'
import { changeUnitBangla, convertToBanglaNumber } from '@/utils/formatNumber';

const ProductCategoryDetails = ({ product }: { product: ProductType }) => {
    return (
        <header className="rounded-2xl border border-base-300 bg-base-100 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <span aria-hidden="true" className="grid size-20 shrink-0 place-items-center rounded-2xl bg-base-200 text-4xl">{product.image}</span>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold sm:text-3xl mb-2">{product.nameBn}</h1>
                    <p className="text-sm text-base-content/70">প্রতি {changeUnitBangla(product.unit)} · {product.categoryNameBn}</p>
                    <p className="mt-2 text-sm text-base-content/70">
                        গতকালের তুলনায় আজ দাম
                        {product.change.dir === "up" ? (
                            <span className="font-semibold">{" "}বেড়েছে {convertToBanglaNumber(product.change.pct)}%</span>
                        ) : product.change.dir === "down" ? (
                            <span className="font-semibold">{" "}কমেছে {convertToBanglaNumber(product.change.pct)}%</span>
                        ) : (
                            <span className='font-semibold'>{" "}অপরিবর্তিত</span>
                        )}
                    </p>
                </div>
                <div className="rounded-box bg-base-200 px-5 py-4 text-center">
                    <p className="text-sm text-base-content/70">আজকের দাম</p>
                    <p className="text-3xl font-bold">{convertToBanglaNumber(product.today)}</p>
                    <p className="text-sm text-base-content/70">টাকা / {changeUnitBangla(product.unit)}</p>

                    {product.change.dir === "up" ? (
                        <>
                            <span className="inline-flex items-center gap-1 font-semibold text-error text-sm" title="বেড়েছে">
                                <span aria-hidden="true">▲</span>
                                <span>{convertToBanglaNumber(product.change.pct)}%</span>
                            </span>
                        </>
                    ) : product.change.dir === "down" ? (
                        <>
                            <span className="inline-flex items-center gap-1 font-semibold text-success text-sm" title="কমেছে">
                                <span aria-hidden="true">▼</span>
                                <span>{convertToBanglaNumber(product.change.pct)}%</span>
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="inline-flex items-center gap-1 font-semibold text-gray-600 text-sm" title="অপরিবর্তিত">
                                <span aria-hidden="true">—</span>
                                <span>০.০%</span>
                            </span>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}

export default ProductCategoryDetails