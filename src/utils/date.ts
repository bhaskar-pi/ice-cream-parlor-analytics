export const getMonthInDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("default", { month: "long" });
};

export const isWeekend = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = date.getDay();

  return day === 0 || day === 6;
};
