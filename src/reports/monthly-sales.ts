import { SalesRecord } from "../types";
import { groupSalesDataByMonth } from "../utils/sales";

export const getMonthWiseSalesData = (salesData: SalesRecord[]) => {
  const groupByMonth = groupSalesDataByMonth(salesData);

  // iterate over each month's sales and calculate total revenue per month
  const report = Object.entries(groupByMonth).map(([month, sale]) => {
    const totalSale = sale.reduce(
      (sum, current) => sum + current.totalPrice,
      0
    );

    return {
      month,
      totalSale,
    };
  });

  return report;
};
