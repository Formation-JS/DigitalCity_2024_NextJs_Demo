import Image from 'next/image'
import NavLink from '../NavLink/NavLink';


export default function Header() {

    return (
        <header className='bg-purple-200 text-red-800 w-full flex flex-row h-16'>
            <Image
                className='object-cover w-auto p-1 '
                src='/logo.png'
                alt='El logo 🐿'
                width={300}
                height={280}
            />            
            <p className='text-4xl self-center me-4'>Next.js</p>
            <NavLink />
        </header>
    );
}
