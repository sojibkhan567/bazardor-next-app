import { ProductType } from "@/types/ProductTypes";
import { convertToBanglaNumber } from "@/utils/formatNumber";
import MarqueeText from "react-fast-marquee";

const Marquee = async () => {

    // get all products data
    const res = await fetch(`${process.env.BASE_URL}/products`);
    const data = await res.json();
    const products: ProductType[] = data;

    return (
        <div className='overflow-hidden border-b border-base-300 bg-base-100/95 backdrop-blur'>
            <ul className='flex shrink-0 items-center'>
                <MarqueeText autoFill={true} pauseOnHover={true} speed={150}>
                    {products.map((product) => (
                        <li key={product.id} className='flex items-center gap-1.5 border-e border-base-200 px-4 py-2 text-sm whitespace-nowrap'>
                            <span>{product.image}</span>
                            <span className="font-medium">{product.nameBn}</span>
                            <span className="text-base-content/70">{convertToBanglaNumber(product.today)} টাকা/কেজি</span>
                            {product.change.dir === "up" ? (
                                <span className="font-semibold price-up">▲ {convertToBanglaNumber(product.change.pct)}%</span>
                            ) : product.change.dir === "down" ? (
                                <span className="font-semibold price-down">▼ {convertToBanglaNumber(product.change.pct)}%</span>
                            ) : (
                                <span className="font-semibold price-flat"> - 0.0%</span>
                            )}
                        </li>
                    ))}

                </MarqueeText>
            </ul>
        </div>
    )
}

export default Marquee