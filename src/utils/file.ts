import * as fs from "fs";
import { SalesRecord } from "../types";

export const readDataFromTextFile = (filePath: string): SalesRecord[] => {
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const rows = fileContent.split(/\r?\n/);
  rows.splice(0, 1); // remove header row

  const salesRecords: SalesRecord[] = rows.map((row) => {
    const [date, sku, unitPrice, quantity, totalPrice] = row.split(",");

    return {
      date,
      sku,
      unitPrice: parseFloat(unitPrice),
      quantity: parseInt(quantity),
      totalPrice: parseFloat(totalPrice),
    };
  });

  return salesRecords;
};
