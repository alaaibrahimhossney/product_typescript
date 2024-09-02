import { ProductList } from './types';
import { ShoppingCartImpl } from './shoppingCart';

const productCatalog: ProductList = [
    { id: 1, name: 'Laptop', description: 'A high-performance laptop', price: 1200, currency: 'USD', inStock: true },
    { id: 2, name: 'Headphones', description: 'Noise-cancelling headphones', price: 200, currency: 'USD', inStock: true },
    { id: 3, name: 'Smartphone', description: 'A smartphone with a great camera', price: 800, currency: 'USD', inStock: false },
];

const cart = new ShoppingCartImpl();

// Add items to the cart
cart.addItem(productCatalog[0], 1); // Add 1 Laptop
cart.addItem(productCatalog[1], 2); // Add 2 Headphones

// Calculate total
const total = cart.calculateTotal();
console.log(`Total: $${total}`);

// Remove an item
cart.removeItem(2); // Remove Headphones

// Calculate total again
const updatedTotal = cart.calculateTotal();
console.log(`Updated Total: $${updatedTotal}`);
