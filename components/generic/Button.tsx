import { FC, ReactNode } from 'react'

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'danger'
    onClick?: () => void
    className?: string
    title?: string
    children: ReactNode
}

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    onClick,
    className = '',
    title,
    children,
}) => {
    const variantStyle =
        variant === 'primary'
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'text-gray-900 hover:bg-gray-50 ring-1 ring-inset ring-gray-300'
    return (
        <button
            type="button"
            className={`mt-3 inline-flex gap-2 items-center justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${variantStyle} ${className}`}
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    )
}

export default Button
