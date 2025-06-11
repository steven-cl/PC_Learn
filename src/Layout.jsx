import { Outlet } from 'react-router-dom'
import HeaderNavigation from '@layouts/HeaderNavigation'
import FooterLayout from '@layouts/FooterLayout'

export default function Layout() {
    return (
        <>
            <HeaderNavigation />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <FooterLayout />
        </>
    )
}
