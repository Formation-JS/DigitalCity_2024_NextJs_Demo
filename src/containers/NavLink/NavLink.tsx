import { 
    HomeModernIcon, CubeIcon, ShoppingBagIcon
 } from '@heroicons/react/24/solid';
import Link from 'next/link';

const links = [
    { name: 'Accueil', href: '/', icon: HomeModernIcon },
    { name: 'Produit', href: '/product', icon: CubeIcon },
    { name: 'Stock', href: '/stock', icon: ShoppingBagIcon },
];

export default function NavLink() {

    return (
        <ul className='flex flex-row gap-4 p-1'>
            {links.map(({ name, href, icon: Icon }) => (
                <Link key={name} href={href} className='h-full flex flex-col'>
                    <Icon className='flex-grow' />
                    <p>{name}</p>
                </Link>
            ))}
        </ul>
    );
};