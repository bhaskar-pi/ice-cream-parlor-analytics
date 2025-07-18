import { SalesRecord } from "../types";
import { getMostPopularSku, getSkuWithQuantities } from "../utils/sales";
import { isWeekend } from "../utils/date";

export const getMostPopularWeekendItem = (salesData: SalesRecord[]) => {
  const weekendSales = salesData.filter((sale) => isWeekend(sale.date));

  // calculate total quantity sold for each sku in the weekend sales
  const quantityBySku = getSkuWithQuantities(weekendSales);

  // find the SKU with the highest quantity sold among weekend sales
  const mostPopularItem = getMostPopularSku(quantityBySku);

  return {
    name: mostPopularItem.sku,
    quantity: mostPopularItem.quantity,
  };
};
