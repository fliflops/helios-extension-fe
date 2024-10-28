//import { Outlet } from "react-router-dom"

import { Navigate } from "react-router-dom";
import Header from "@/components/layouts/Header";
import { useAppSelector } from "./hooks/redux.hooks"
import { getAccessToken } from "./lib/redux/slices/auth.slice"
import { TruckerClearance } from "./features/trucker-clearance";

function App() {
  const token = useAppSelector(getAccessToken);
  if(!token) return <Navigate to='/login' replace/>
  return (
    <div className="w-full">
      <Header/>
      <div className="relative top-20 px-5">
        <TruckerClearance/>
      </div>
      
    </div>
  )
}

export default App
