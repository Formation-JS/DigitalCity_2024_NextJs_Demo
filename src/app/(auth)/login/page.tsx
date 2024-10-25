import LoginForm from '@/containers/Auth/LoginForm';

export default async function LoginPage () {

    return (
        <>
            <h1 className='text-5xl mb-5'>Login</h1>
            <LoginForm />
        </>
    )
}