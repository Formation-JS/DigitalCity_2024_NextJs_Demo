import RegisterForm from '@/containers/Auth/RegisterForm';

export default async function RegisterPage () {

    return (
        <>
            <h1 className='text-5xl mb-5'>Créer un compte</h1>
            <RegisterForm />
        </>
    )
}