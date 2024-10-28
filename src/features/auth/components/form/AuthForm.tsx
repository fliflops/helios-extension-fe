import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {Input} from '@/components/ui/input';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useLoginMutation } from '@/lib/redux/api/auth.api';
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks';
import { getAccessToken, setLogin } from '@/lib/redux/slices/auth.slice';
import { Navigate } from 'react-router-dom';

interface AuthFormProps {

}

const authSchema = yup.object({
    email: yup.string().email().required('Email is Required'),
    password: yup.string().required('Password is Required')
})

type authSchemaType = yup.InferType<typeof authSchema>

const AuthForm: React.FC<AuthFormProps> = () => {
    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useAppDispatch();
    const token = useAppSelector(getAccessToken);

    const form = useForm<authSchemaType>({
        resolver: yupResolver(authSchema),
        defaultValues: {
            email:'',
            password: ''
        }
    })

    const handleSubmit = async(values:authSchemaType) => {
        await login({
            ...values
        })
        .unwrap()
        .then((result) => {
            dispatch(setLogin({
                 email: result.email,
                 token: result.token
            }))
        })
    }

    if(token) {
        return <Navigate to='/' replace/>
    }

    return <div className='flex flex-col w-72 gap-5'>
        <p className='text-2xl'>Login</p>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Form {...form}>
                <div className='flex flex-col gap-2'>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className='bg-inherit' placeholder='Email' type='email' {...field}/>
                                </FormControl>
                                <FormMessage className='text-xs'/>
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name='password'
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input className='bg-inherit' placeholder='Password' type='password' {...field}/>
                                </FormControl>
                                <FormMessage className='text-xs'/>
                            </FormItem>
                        )}
                    />
                </div> 
                <div className='flex justify-end mt-3'>
                    <Button isLoading={isLoading} type='submit'>Login</Button>
                </div>
            </Form>
        </form>
    </div>}

export default AuthForm