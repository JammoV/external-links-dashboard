import { FC } from 'react'
import TopHeader from '@/components/header/TopHeader'
import Navigation from '@/components/header/Navigation'

const Header: FC = () => {
    return (
        <>
            <TopHeader />
            <Navigation />
            <div className="h-12 bg-amber-200"></div>
        </>
    )
}

export default Header
