import { FC } from 'react'
import {
    faGripVertical,
    faClone,
    faEdit,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@/components/generic/Button'

export interface ExternalLink {
    id: string
    name: string
    url: string
    code: string
    type: string
    permission: string
    logoUrl: string
    position: number
    icon: string
    color: string
    showOnActionPage: boolean
}

interface ExternalLinkTileProps {
    externalLink: ExternalLink
    onClick: () => void
    onDuplicate: () => void
}

const ExternalLinkTile: FC<ExternalLinkTileProps> = ({
    externalLink,
    onClick,
    onDuplicate,
}) => {
    return (
        <div
            className={`flex flex-col justify-between rounded border border-l-8 border-l-[${externalLink.color}]`}
            style={{ borderLeftColor: externalLink.color }}
        >
            <div className="flex justify-between gap-1 p-4">
                <div className="flex flex-col">
                    <span className="font-bold">{externalLink.name}</span>
                    <span className="text-neutral-400 text-sm">
                        {externalLink.code}
                    </span>
                    <span className="text-neutral-400 text-sm">
                        {externalLink.type}
                    </span>
                </div>
                <FontAwesomeIcon
                    icon={faGripVertical}
                    className="w-4 h-4 hover:cursor-grabbing"
                />
            </div>
            <div className="bg-gray-50 flex justify-end gap-2 p-2">
                <Button
                    variant="secondary"
                    title="Dupliceer"
                    onClick={onDuplicate}
                >
                    <FontAwesomeIcon icon={faClone} />
                </Button>
                <Button variant="secondary" onClick={onClick}>
                    <span>Wijzig</span>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
            </div>
        </div>
    )
}

export default ExternalLinkTile
