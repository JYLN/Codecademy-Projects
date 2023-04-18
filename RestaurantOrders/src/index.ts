import { Order, PriceBracket, orders } from './orders';
import { Restaurant, restaurants } from './restaurants';

/// Add your getMaxPrice() function below:
function getMaxPrice(reqPriceBracket: PriceBracket) {
  switch (reqPriceBracket) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
  }
}

/// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
  const filteredOrders: Order[][] = [];
  orders[0].filter((order: Order) => order.price <= getMaxPrice(price));

  orders.forEach((restuarant: Order[]) => {
    const result = restuarant.filter((order: Order) => order.price <= getMaxPrice(price));
    filteredOrders.push(result);
  });

  return filteredOrders;
}

/// Add your printOrders() function below:
function printOrders(restuarants: Restaurant[], orders: Order[][]) {
  restaurants.forEach((restuarant: Restaurant, index: number) => {
    if (orders[index].length > 0) {
      console.log(restuarant.name);
      orders[index].forEach((order: Order) => console.log(`- ${order.name}: $${order.price}`));
    }
  });
}

/// Main
const elligibleOrders = getOrders(PriceBracket.Low, orders);
//console.log(elligibleOrders);
printOrders(restaurants, elligibleOrders);
