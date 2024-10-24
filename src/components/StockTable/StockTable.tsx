import { Stock } from '@/types/stock';
import style from './StockTable.module.css';

type StockTableProps = {
    stockRows: Stock[];
};

export default function StockTable({ stockRows }: StockTableProps) {

    return (
        <table className={style['stock-table']}>
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Quantité</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {stockRows.map(({ id, productId, quantity, movementDate }) => (
                    <tr key={id}>
                        <td>{productId}</td>
                        <td>{quantity}</td>
                        <td>{new Date(movementDate).toLocaleString('fr-be')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}