import { FC } from 'react'

const TopHeader: FC = () => (
    <div className="bg-sky-600 p-2">
        <div className="container mx-auto text-white flex flex-row justify-between">
            <div>Welkom bij de applicatie. Heeft u vragen?</div>
            <div className="flex gap-4">
                <span>Topmenu 1</span>
                <span>Topmenu 2</span>
                <span>Topmenu 3</span>
                <span>Afmelden</span>
            </div>
        </div>
    </div>
)

export default TopHeader
