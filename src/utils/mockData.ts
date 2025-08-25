// Mock data for the e-commerce store

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
}

// Generate mock products
export const generateMockProducts = (): Product[] => [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 15
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    price: 24.99,
    description: 'Comfortable and sustainable organic cotton t-shirt available in multiple colors.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 'Clothing',
    stock: 32
  },
  {
    id: '3',
    name: 'Stainless Steel Water Bottle',
    price: 19.99,
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    category: 'Lifestyle',
    stock: 28
  },
  {
    id: '4',
    name: 'Leather Wallet',
    price: 45.99,
    description: 'Genuine leather bifold wallet with RFID blocking technology.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
    category: 'Accessories',
    stock: 18
  },
  {
    id: '5',
    name: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
    image: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4d1?w=500&h=500&fit=crop',
    category: 'Electronics',
    stock: 12
  },
  {
    id: '6',
    name: 'Ceramic Coffee Mug',
    price: 12.99,
    description: 'Handcrafted ceramic coffee mug perfect for your morning brew.',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500&h=500&fit=crop',
    category: 'Kitchen',
    stock: 45
  },
  {
    id: '7',
    name: 'Yoga Mat',
    price: 29.99,
    description: 'Non-slip yoga mat made from eco-friendly materials.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=500&fit=crop',
    category: 'Fitness',
    stock: 22
  },
  {
    id: '8',
    name: 'Desk Lamp',
    price: 34.99,
    description: 'Modern LED desk lamp with adjustable brightness and USB charging port.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    category: 'Home',
    stock: 16
  }
];

export const categories = ['All', 'Electronics', 'Clothing', 'Lifestyle', 'Accessories', 'Kitchen', 'Fitness', 'Home'];

export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@store.com',
    name: 'Admin User',
    isAdmin: true
  },
  {
    id: '2',
    email: 'user@example.com',
    name: 'John Doe',
    isAdmin: false
  }
];