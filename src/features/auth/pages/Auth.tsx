import React from 'react'
import AuthForm from '../components/form/AuthForm';

interface AuthProps {

}

const Auth: React.FC<AuthProps> = () => {
    return <div className='grid grid-cols-2 h-screen'>
        <div className='bg-blue-900'>

        </div>
        <div className='flex flex-col justify-center items-center'>
            <AuthForm/>
        </div>
        

    </div>;
}

export default Auth