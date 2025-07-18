import { PopularItemStatistics, SalesRecord } from "../types";
import {
  getMostPopularSku,
  getSkuWithQuantities,
  groupSalesDataByMonth,
} from "../utils/sales";

export const getMostPopularItemPerMonth = (salesData: SalesRecord[]) => {
  const groupByMonth = groupSalesDataByMonth(salesData);

  const report: Record<string /* monthName */, PopularItemStatistics> = {};

  Object.entries(groupByMonth).forEach(([month, sales]) => {
    const skuQuantities = getSkuWithQuantities(sales);

    // finding most popular item in a month
    const { sku: popularItem, quantity } = getMostPopularSku(skuQuantities);

    // Filter sales of only the popular item
    const popularItemSales = sales.filter((sale) => sale.sku === popularItem);

    // get quantity stats (min, max, avg)
    const quantities = popularItemSales.map((s) => s.quantity);

    const avg = Math.round((quantity / quantities.length) * 100) / 100;
    const min = Math.min(...quantities);
    const max = Math.max(...quantities);

    report[month] = {
      name: popularItem,
      totalOrders: quantity,
      minOrders: min,
      maxOrders: max,
      avgOrders: avg,
    };
  });

  return report;
};
