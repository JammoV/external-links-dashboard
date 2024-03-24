'use client'

import links from './links.json'
import React, { useState } from 'react'
import ExternalLinkTile, {
    ExternalLink,
} from '@/components/dashboard/ExternalLinkTile'
import { v4 } from 'uuid'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Popup from '@/components/dashboard/Popup'
import Button from '@/components/generic/Button'
import TextInput from '@/components/generic/TextInput'

export default function Dashboard() {
    const [externalLinks, setExternalLinks] = useState<ExternalLink[]>(links)
    const [activeExternalLink, setActiveExternalLink] =
        useState<ExternalLink | null>()

    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const filteredExternalLinks = links.filter((link) =>
            link.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setExternalLinks(filteredExternalLinks)
    }

    const handleDuplicate = (externalLink: ExternalLink): void => {
        setExternalLinks((currentExternalLinks) => [
            {
                ...externalLink,
                id: v4(),
                name: externalLink.name + ' (kopie)',
            },
            ...currentExternalLinks,
        ])
    }

    const handleDelete = (externalLinkId: string): void => {
        setExternalLinks((currentExternalLinks) =>
            currentExternalLinks.filter((link) => link.id !== externalLinkId)
        )
        setActiveExternalLink(null)
    }

    return (
        <div className="py-4">
            {activeExternalLink && (
                <Popup
                    externalLink={activeExternalLink}
                    closeHandler={() => setActiveExternalLink(null)}
                    deleteHandler={() => handleDelete(activeExternalLink?.id)}
                />
            )}
            <div className="flex justify-between items-center">
                <div className="w-1/4">
                    <TextInput
                        name="search"
                        placeholder="Filter op naam"
                        onChange={handleFilter}
                    />
                </div>
                <Button variant="primary" onClick={() => {}}>
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Koppeling toevoegen</span>
                </Button>
            </div>
            <div className="my-8 grid grid-cols-6 grid-flow-row gap-4">
                {externalLinks.map((externalLink) => (
                    <ExternalLinkTile
                        key={externalLink.id}
                        externalLink={externalLink}
                        onClick={() => setActiveExternalLink(externalLink)}
                        onDuplicate={() => handleDuplicate(externalLink)}
                    />
                ))}
            </div>
        </div>
    )
}
