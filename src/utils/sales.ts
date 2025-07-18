import { SalesRecord } from "../types";
import { getMonthInDate } from "./date";

export const groupSalesDataByMonth = (salesData: SalesRecord[]) => {
  const groupByMonth: Record<string, SalesRecord[]> = {};

  for (const sale of salesData) {
    const month = getMonthInDate(sale.date);

    if (!groupByMonth[month]) groupByMonth[month] = [];
    groupByMonth[month].push(sale);
  }

  return groupByMonth;
};

export const getSkuWithQuantities = (sales: SalesRecord[]) => {
  return sales.reduce<Record<string, number>>((acc, sale) => {
    acc[sale.sku] = (acc[sale.sku] || 0) + sale.quantity;
    return acc;
  }, {});
};

export const getMostPopularSku = (quantityBySku: Record<string, number>) => {
  const skuQuantities = Object.entries(quantityBySku);
  let mostPopular = { sku: "", quantity: 0 };

  for (const [sku, quantity] of skuQuantities) {
    if (quantity > mostPopular.quantity) {
      mostPopular = { sku, quantity };
    }
  }

  return mostPopular;
};
