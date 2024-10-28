import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store'

type authSliceType = {
    token: string | null,
    email: string | null
}

const initialState:authSliceType = {
    token: null,
    email: null
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setLogin: (state, action:  PayloadAction<authSliceType>) =>({
            ...state,
            ...action.payload
        }),
        setLogOut:() => initialState
    }
})


export const getAccessToken = (state: RootState) => state.auth.token;
export const getSession = (state: RootState) => state.auth;
export const {setLogin,setLogOut} = authSlice.actions;
export default authSlice.reducer;


