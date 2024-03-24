import { FC } from 'react'
import Link from 'next/link'

const Navigation: FC = () => (
    <div className="p-2">
        <div className="container mx-auto flex flex-row justify-between">
            <div className="flex items-center gap-8 uppercase font-bold">
                <Link href="#" className="text-lg">
                    APPLICATIE
                </Link>
                <Link
                    href="#"
                    className="cursor-pointer text-sm hover:underline"
                >
                    Menu item 1
                </Link>
                <Link
                    href="#"
                    className="cursor-pointer text-sm hover:underline"
                >
                    Menu item 2
                </Link>
                <Link
                    href="#"
                    className="cursor-pointer text-sm hover:underline"
                >
                    Menu item 3
                </Link>
                <Link
                    href="#"
                    className="cursor-pointer text-sm hover:underline"
                >
                    Menu item 4
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <span className="bg-green-800 rounded-full w-10 h-10 flex font-bold items-center justify-center text-white text-xs">
                    VN
                </span>
                <span className="text-sm">Voornaam Achternaam</span>
            </div>
        </div>
    </div>
)

export default Navigation
