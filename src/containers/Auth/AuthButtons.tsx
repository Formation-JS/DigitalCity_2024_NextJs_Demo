import Link from 'next/link';
import {
    UserPlusIcon as RegisterIcon,
    ArrowRightEndOnRectangleIcon as LoginIcon,
    ArrowRightStartOnRectangleIcon as LogoutIcon
} from '@heroicons/react/24/solid';
import { getSession } from '@/utils/session.utils';
import { authLogoutAction } from '@/actions/auth.action';

export default async function AuthButtons() {

    const session = await getSession();
    console.log('Session : ', session);

    return (
        <div className='flex flex-row gap-1 items-center'>
            {!session.data ? (
                <>
                    <Link href='/register'>
                        <RegisterIcon className='h-7'
                            title='Register' />
                    </Link>
                    <Link href='/login'>
                        <LoginIcon className='h-7'
                            title='Login' />
                    </Link>
                </>
            ) : (
                <form action={authLogoutAction}>
                    <button type='submit'>
                        <LogoutIcon className='h-7'
                            title='Logout' />
                    </button>
                </form>
            )}
        </div>
    );
} 