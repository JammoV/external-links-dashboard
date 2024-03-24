import React, { FC } from 'react'

interface TextInputProps {
    name: string
    value?: string
    placeholder?: string
    title?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: FC<TextInputProps> = ({
    name,
    value,
    placeholder,
    title,
    onChange,
}) => {
    return (
        <div className="flex flex-col">
            {title && <span className="text-sm font-semibold">{title}</span>}
            <input
                type="text"
                name={name}
                value={value}
                className={`w-full h-10 border p-2 rounded`}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput
