/* eslint-disable @typescript-eslint/no-explicit-any */
import {apiSlice} from '../api';

export const {
    useLoginMutation
} = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<any, {email:string; password: string;}> ({
            query:(args) => ({
                url:'/auth/login',
                body: args,
                method:'POST'
            })
        })
    })
})