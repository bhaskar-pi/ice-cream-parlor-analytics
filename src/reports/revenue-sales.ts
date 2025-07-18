import { RevenueStatistics, SalesRecord } from "../types";
import { groupSalesDataByMonth } from "../utils/sales";

const getTotalRevenueBySku = (sales: SalesRecord[]) => {
  return sales.reduce<Record<string, number>>((acc, sale) => {
    acc[sale.sku] = (acc[sale.sku] || 0) + sale.totalPrice;
    return acc;
  }, {});
};

const findTopRevenueItem = (revenueBySku: Record<string, number>) => {
  let topItem = { sku: "", revenue: 0 };

  for (const [sku, revenue] of Object.entries(revenueBySku)) {
    if (revenue > topItem.revenue) {
      topItem = { sku, revenue };
    }
  }
  return topItem;
};

export const getTopRevenueItemPerMonth = (salesData: SalesRecord[]) => {
  const groupByMonth = groupSalesDataByMonth(salesData);

  const report: Record<string, RevenueStatistics> = {};

  // for each month, calculate total revenue per sku and find the top item
  Object.entries(groupByMonth).forEach(([month, sales]) => {
    const revenueBySku = getTotalRevenueBySku(sales);
    const { sku, revenue } = findTopRevenueItem(revenueBySku);

    report[month] = {
      name: sku,
      revenue,
    };
  });

  return report;
};
