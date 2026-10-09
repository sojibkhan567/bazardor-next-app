import { ProductType } from '@/types/ProductTypes'
import { changeUnitBangla, convertToBanglaNumber } from '@/utils/formatNumber';
import { getMarketPriceStats } from '@/utils/statisticsCalculate'

const ProductStatistics = ({ product }: { product: ProductType }) => {

    // product statistics calculation
    const productStats = getMarketPriceStats(product.markets);

    return (
        <section>
            <h2 className="mb-3 text-lg font-semibold">দামের সারসংক্ষেপ</h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                <div className="stat rounded-box border border-base-300 bg-base-100 space-y-1">
                    <div className="stat-title">সর্বনিম্ন দাম</div>
                    <div className="stat-value text-2xl text-success">
                        {convertToBanglaNumber(productStats.minPrice)}
                        <span className="text-sm font-medium"> টাকা</span>
                    </div>
                    <div className="stat-desc">
                        সবচেয়ে কম দামের বাজার
                    </div>
                </div>

                <div className="stat rounded-box border border-base-300 bg-base-100 space-y-1">
                    <div className="stat-title">সর্বাধিক দাম</div>
                    <div className="stat-value text-2xl text-error">
                        {convertToBanglaNumber(productStats.maxPrice)}
                        <span className="text-sm font-medium"> টাকা</span>
                    </div>
                    <div className="stat-desc">সবচেয়ে বেশি দামের বাজার</div>
                </div>

                <div className="stat rounded-box border border-base-300 bg-base-100 space-y-1">
                    <div className="stat-title">গড় দাম</div>
                    <div className="stat-value text-2xl text-primary-2">
                        {convertToBanglaNumber(productStats.averagePrice)}
                        <span className="text-sm font-medium"> টাকা</span>
                    </div>
                    <div className="stat-desc">প্রতি {changeUnitBangla(product.unit)} এর হিসাবে</div>
                </div>
            </div>
        </section>
    )
}

export default ProductStatistics