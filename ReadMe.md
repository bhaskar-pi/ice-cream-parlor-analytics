
This sales analytics tool provides insights for an ice cream parlor, such as monthly sales, popular items, revenue analysis, and more — all using modular and reusable code.

### Reports Included

- **Total Sales**: Calculates the overall revenue of the store.
- **Month-wise Sales Totals**: Shows total sales amount for each month.
- **Most Popular Item Each Month**: Identifies the item with the highest quantity sold in each month.
- **Popularity Stats**: For the most popular item of each month, provides minimum, maximum, and average order quantities.
- **Top Revenue Item Each Month**: Finds the item that generated the highest revenue per month.
- **Weekend Top Seller**: Determines the most sold item across all Saturdays and Sundays in the dataset.

## Project Structure

```
src/
  index.ts                # Main entry point
  sales-data.txt          # Sample sales data
  reports/                # Report generation modules
    index.ts
    monthly-sales.ts
    popular-items.ts
    revenue-sales.ts
    total-sales.ts
    weekend-sales.ts
  types/                  # TypeScript type definitions
    index.ts
  utils/                  # Utility functions
    date.ts
    file.ts
    sales.ts
```

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone <https://github.com/bhaskar-pi/ice-cream-parlor-analytics.git>
   cd Ice-cream-parlor-analytics
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Usage

To run the main program:

```sh
npm run print
or
npm run start
```

## Scripts

- `start`: Runs the main entry point (`src/index.ts`).


## License

This project is licensed under the MIT License.
