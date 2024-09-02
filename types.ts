

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: Currency;
    inStock: boolean;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface ShoppingCart {
    items: CartItem[];
    addItem: (product: Product, quantity: number) => void;
    removeItem: (productId: number) => void;
    calculateTotal: () => number;
}

export type ProductList = Product[];
