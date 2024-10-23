import StockTable from '@/components/StockTable/StockTable';
import { fetchStock, fetchStockCount } from '@/services/stock.service';
import { Stock } from '@/types/stock';
import Link from 'next/link';

type StockPageProps = {
    searchParams: Promise<{
        offset?: string;
        limit?: string;
    }>;
};

export default async function StockPage({ searchParams }: StockPageProps) {

    // Récuperation des "searchParams" depuis la route
    const {offset, limit} = await searchParams;

    const offsetOfPage = parseInt(offset ?? '0');
    const nbRowByPage = parseInt(limit ?? '10');

    // Utilisation du service
    const stockRows: Stock[] = await fetchStock(offsetOfPage, nbRowByPage);
    const totalRow = await fetchStockCount();
    const nbPage = Math.ceil(totalRow / nbRowByPage);

    const btnPaginations = [];
    for (let i = 1; i <= nbPage; i++) {
        const params = new URLSearchParams();
        params.set('offset', ((i - 1) * nbRowByPage).toString());
        params.set('limit', nbRowByPage.toString());

        btnPaginations.push(
            <button key={i} className='px-2 py-1 bg-purple-200 rounded'>
                <Link href={'?' + params} >{i}</Link>
            </button>
        );
    }

    return (
        <>
            <h1 className='text-5xl mb-5'>Stock</h1>
            <StockTable stockRows={stockRows} />
            <div className='flex flex-row gap-1 mt-2'>
                {btnPaginations}
            </div>
        </>
    );
}
