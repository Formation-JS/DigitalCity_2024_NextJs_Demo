import { Stock } from './stock';

export type Product = {
    id: number;
    label: string;
    marque: string;
    price: number;
    isActif: boolean;
};

export type ProdutFormData = Omit<Product, 'id' | 'isActif'>;

export type ProductWithStock = Product & {
    stocks: Stock[];
};
