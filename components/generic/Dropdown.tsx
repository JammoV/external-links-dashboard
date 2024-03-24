import React, { FC } from 'react'

interface DropdownProps {
    name: string
    options: { label: string; value: string }[]
    value?: string
    title?: string
}

const Dropdown: FC<DropdownProps> = ({ name, options, value, title }) => {
    return (
        <div className="flex flex-col">
            {title && <span className="text-sm font-semibold">{title}</span>}
            <select
                name={name}
                className="w-full border p-2 rounded bg-white"
                onChange={() => {}}
                defaultValue={value}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown
