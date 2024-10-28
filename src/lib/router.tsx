import {createBrowserRouter} from "react-router-dom";
import App from '@/App';
import { Auth } from "@/features/auth";

const route = createBrowserRouter([
    {
        path:'/',
        element: <App/>,    
    },
    {
        path:'/login',
        element: <Auth/>
    }   
])

export default route
