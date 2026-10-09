import { ProductType } from '@/types/ProductTypes'
import { convertToBanglaNumber } from '@/utils/formatNumber'

const ProductMarketDetails = ({ product }: { product: ProductType }) => {
    // sorting market by minimum price
    const sortedMarkets = [...product.markets].sort(
        (a, b) => a.min - b.min
    );
    return (
        <section>
            <h2 className="mb-3 text-lg font-semibold">বাজারভিত্তিক আজকের দাম</h2>
            <div className='overflow-x-auto rounded-box border border-base-300 bg-base-100'>
                <table className='table table-zebra'>
                    <thead>
                        <tr>
                            <th>বাজার</th>
                            <th>বিভাগ</th>
                            <th className="text-right">সর্বনিম্ন</th>
                            <th className="text-right">সর্বাধিক</th>
                            <th className="text-right">গড়</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedMarkets.map((market, index) => (
                            <tr key={index}>
                                <td className="font-medium">{market.market}</td>
                                <td className="text-base-content/70">{market.division}</td>
                                <td className="text-right">{convertToBanglaNumber(market.min)} টাকা</td>
                                <td className="text-right">{convertToBanglaNumber(market.max)} টাকা</td>
                                <td className="text-right font-semibold">{convertToBanglaNumber((market.max + market.min) / 2)} টাকা</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ProductMarketDetails