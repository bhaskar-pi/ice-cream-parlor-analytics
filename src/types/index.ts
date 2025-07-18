export interface SalesRecord {
  date: string;
  sku: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface PopularItemStatistics {
  name: string;
  totalOrders: number;
  minOrders: number;
  maxOrders: number;
  avgOrders: number;
}

export interface RevenueStatistics {
  name: string;
  revenue: number
};
