import type { Market } from "@/types/ProductTypes";

export const getMarketPriceStats = (markets: Market[]) => {
  if (markets.length === 0) {
    return {
      minPrice: 0,
      maxPrice: 0,
      averagePrice: 0,
    };
  }

  // find out min & max
  const minPrices = markets.map((market) => market.min);
  const maxPrices = markets.map((market) => market.max);

  const minPrice = Math.min(...minPrices);
  const maxPrice = Math.max(...maxPrices);

  // calculate average minimum
  const averageMin =
    minPrices.reduce((sum, price) => sum + price, 0) / markets.length;

  // calcilate average maximum
  const averageMax =
    maxPrices.reduce((sum, price) => sum + price, 0) / markets.length;

  // calculate total average
  const averagePrice = Math.round((averageMin + averageMax) / 2);

  return {
    minPrice,
    maxPrice,
    averagePrice,
  };
};
