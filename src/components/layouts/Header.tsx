import React from 'react'
import { Button } from '../ui/button';
import { useAppDispatch } from '@/hooks/redux.hooks';
import { setLogOut } from '@/lib/redux/slices/auth.slice';

interface headerProps {

}

const Header: React.FC<headerProps> = () => {
    const dispatch = useAppDispatch();

    const handleSignOut = () => {
        dispatch(setLogOut())
    }

    return <div className='fixed w-full h-14 backdrop-blur-sm z-10 drop-shadow-md flex items-center px-5 border border-b-1'>
        <div className='flex w-full justify-end'>
            <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
       
    </div>;
}

export default Header