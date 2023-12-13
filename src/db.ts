export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Order {
  id: string;
  client: string;
  productId: string;
  address: string;
}

type DBData = {
  products: Product[];
  orders: Order[];
};

export const db: DBData = {
  products: [
    {
      id: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
      name: 'Canon 50d',
      price: 1500,
      description: 'Classic camera for aspiring photographers',
    },
    {
      id: '4b2db7a8-00e7-4099-959d-30d846c9de08',
      name: 'Sony A7',
      price: 9000,
      description: 'Professional camera for professional photographers',
    },
    {
      id: '105224b7-9f2f-4a22-9e5f-fd4cd831af9e',
      name: 'Nikon D750',
      price: 8000,
      description: 'Small camera with big features',
    },
  ],
  orders: [
    {
      id: 'b8447e79-8a43-44d0-8f9a-623cc5355bd5',
      productId: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
      client: 'John Doe',
      address: '1234 Main St, New York, NY 10001',
    },
    {
      id: '6c81aeb3-2e97-4ee4-b085-d7a07ff812a5',
      productId: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
      client: 'Jane Doe',
      address: '23 Baker Street, New York, NY 10001',
    },
    {
      id: '4b5ec66f-3fb9-45c8-9fb2-c3a7c734d0a6',
      productId: 'c5ec02c0-60c0-4a67-9614-6e64e8f7d343',
      client: 'Al Swearengen',
      address: '12 Main St, Deadwood, DA 12002',
    },
  ],
};
