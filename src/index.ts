import * as path from "path";
import { SalesRecord } from "./types";
import {
  getTotalSalesOfStore,
  getMonthWiseSalesData,
  getMostPopularItemPerMonth,
  getTopRevenueItemPerMonth,
  getMostPopularWeekendItem,
} from "./reports";
import { readDataFromTextFile } from "./utils/file";

const filePath = path.join(__dirname, "/sales-data.txt");
const salesData: SalesRecord[] = readDataFromTextFile(filePath);

const totalSales = getTotalSalesOfStore(salesData);
const totalSaleByMonthWise = getMonthWiseSalesData(salesData);
const popularItemsPerMonth = getMostPopularItemPerMonth(salesData);
const topRevenueItemsPerMonth = getTopRevenueItemPerMonth(salesData);
const weekendPopularItem = getMostPopularWeekendItem(salesData);

console.log(
  "\x1b[34m Total Sales of All Time:\x1b[0m \x1b[32m₹ " +
    totalSales.toLocaleString("en-IN") +
    "\x1b[0m\n"
);

console.log("\x1b[33m Monthly Sales Summary:\x1b[0m");
console.table(totalSaleByMonthWise);

console.log(
  "\x1b[36m Most Popular Item per Month:\x1b[0m"
);
console.table(popularItemsPerMonth);

console.log("\x1b[35m Top Revenue-Generating Item per Month:\x1b[0m");
console.table(topRevenueItemsPerMonth);

console.log("\x1b[31m Top Popular Item on Weekends:\x1b[0m");
console.table([weekendPopularItem]);
