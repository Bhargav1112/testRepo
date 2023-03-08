import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Admin/Sidebar'
import Header from '../Components/Admin/Header'

const AdminPenal = () => {
    const location = useLocation();
    const navigate = useNavigate()
    console.log("log", location);
    useEffect(() => {
        if (location.pathname === "/admin") {
            navigate('/admin/dashboard')
        }
    }, [])

    return (
        <div className='flex h-full'>
            <aside className='h-screen sticky top-0'>
                <Sidebar />
            </aside>
            <div className='w-full bg-gray-50'>
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPenal