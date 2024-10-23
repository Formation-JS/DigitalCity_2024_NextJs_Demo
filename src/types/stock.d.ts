export type Stock = {
    id: number;
    movementDate: string;
    productId: number;
    quantity: number;
};

export type StockFormData = Omit<Stock, 'id' | 'movementDate'>;