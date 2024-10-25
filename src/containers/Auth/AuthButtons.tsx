import Link from 'next/link';
import {
    UserPlusIcon as RegisterIcon, 
    ArrowRightEndOnRectangleIcon as LoginIcon,
    ArrowRightStartOnRectangleIcon as LogoutIcon
} from '@heroicons/react/24/solid';

export default async function AuthButtons() {

    return (
        <div className='flex flex-row gap-1 items-center'>
            <Link href='/register'>
                <RegisterIcon className='h-7'
                    title='Register'/>
            </Link>
            <Link href='/login'>
                <LoginIcon  className='h-7'
                    title='Login' />
            </Link>
            <button>
                <LogoutIcon  className='h-7' 
                    title='Logout' />
            </button>
        </div>
    )
} 