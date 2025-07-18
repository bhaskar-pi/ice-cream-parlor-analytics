import { SalesRecord } from "../types";

export const getTotalSalesOfStore = (salesData: SalesRecord[]) => {
  const totalSales = salesData.reduce(
    (sum, row) => sum + Number(row.totalPrice),
    0
  );

  return totalSales;
};
