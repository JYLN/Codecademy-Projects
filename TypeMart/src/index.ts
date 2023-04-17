import products from './products';

const productName: string = 'tote bag';
const product = products.find(product => product.name === productName);
console.log(product);

if (product?.preOrder === true) {
  console.log(`Pre-order status: We will send you a message when this is on the way!`);
}

const shippingAddress: string = '1999 Lilac St, Casper, WY, 82222';

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

if (Number(product?.price) > 25) {
  shipping = 0;
  console.log('Your order is over $25! Enjoy free shipping!');
} else {
  shipping = 5;
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

taxTotal = Number(product?.price) * taxPercent;
total = Number(product?.price) + taxTotal + shipping;

console.log(`Product Name: ${product?.name}
Shipping Address: ${shippingAddress}
Product Price: ${product?.price}
Total Tax: ${taxTotal}
Shipping: ${shipping}
Total: ${total}`);
