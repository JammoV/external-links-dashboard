import React, { FC } from 'react'
import {
    faTrash,
    faPalette,
    faRotateLeft,
    faRotateRight,
    faChevronLeft,
    faChevronRight,
    faFlask,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ExternalLink } from '@/components/dashboard/ExternalLinkTile'
import Button from '@/components/generic/Button'
import TextInput from '@/components/generic/TextInput'
import Dropdown from '@/components/generic/Dropdown'

interface PopupProps {
    externalLink: ExternalLink
    closeHandler: () => void
    deleteHandler: () => void
}

const Popup: FC<PopupProps> = ({
    externalLink,
    closeHandler,
    deleteHandler,
}) => {
    return (
        <>
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        Externe koppeling bewerken
                                    </h3>
                                    <div className="flex flex-row gap-12">
                                        <div className="flex flex-col gap-4">
                                            <TextInput
                                                name="naam"
                                                title="Naam"
                                                value={externalLink.name}
                                                onChange={() => {}}
                                            />
                                            <TextInput
                                                name="url"
                                                title="Externe Link"
                                                value={externalLink.url}
                                                onChange={() => {}}
                                            />
                                            <TextInput
                                                name="code"
                                                title="Code"
                                                value={externalLink.code}
                                                onChange={() => {}}
                                            />
                                            <Dropdown
                                                name="type"
                                                title="Type"
                                                value={externalLink.type}
                                                options={[
                                                    {
                                                        value: 'TYPE A',
                                                        label: 'TYPE A',
                                                    },
                                                    {
                                                        value: 'TYPE B',
                                                        label: 'TYPE B',
                                                    },
                                                    {
                                                        value: 'TYPE C',
                                                        label: 'TYPE C',
                                                    },
                                                ]}
                                            />
                                            <Dropdown
                                                name="permission"
                                                title="Permissie"
                                                value={externalLink.permission}
                                                options={[
                                                    {
                                                        value: 'permission.default',
                                                        label: 'Standaard',
                                                    },
                                                    {
                                                        value: 'permission.default',
                                                        label: 'Algemeen',
                                                    },
                                                    {
                                                        value: 'permission.default',
                                                        label: 'Specifiek',
                                                    },
                                                ]}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4 bg-slate-50 p-4">
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                Ontwerp
                                            </h4>
                                            <div className="flex items-end gap-1">
                                                <TextInput
                                                    name="kleur"
                                                    title="Kleur"
                                                    value={externalLink.color}
                                                    onChange={() => {}}
                                                />
                                                <div
                                                    className="flex items-center justify-center w-10 h-10 cursor-pointer rounded border"
                                                    style={{
                                                        backgroundColor:
                                                            externalLink.color,
                                                    }}
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faPalette}
                                                        className="text-white"
                                                    />
                                                </div>
                                            </div>
                                            <TextInput
                                                name="logoUrl"
                                                title="Logo-pad (SVG)"
                                                value={externalLink.logoUrl}
                                                onChange={() => {}}
                                            />
                                            <div>
                                                <span className="text-sm font-semibold">
                                                    Icoon
                                                </span>
                                                <div className="flex flex-wrap gap-2">
                                                    <div className="flex items-center justify-center border bg-white rounded-sm h-8 w-8 cursor-pointer">
                                                        <FontAwesomeIcon
                                                            icon={faRotateLeft}
                                                            className="w-4 h-4"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-center border border-black bg-white rounded-sm h-8 w-8 cursor-pointer">
                                                        <FontAwesomeIcon
                                                            icon={faRotateRight}
                                                            className="w-4 h-4"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-center border bg-white rounded-sm h-8 w-8 cursor-pointer">
                                                        <FontAwesomeIcon
                                                            icon={faChevronLeft}
                                                            className="w-4 h-4"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-center border bg-white rounded-sm h-8 w-8 cursor-pointer">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faChevronRight
                                                            }
                                                            className="w-4 h-4"
                                                        />
                                                    </div>
                                                    <div className="flex items-center justify-center border bg-white rounded-sm h-8 w-8 cursor-pointer">
                                                        <FontAwesomeIcon
                                                            icon={faFlask}
                                                            className="w-4 h-4"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-row gap-2 pt-4">
                                                <input
                                                    type="checkbox"
                                                    name="showOnActionPage"
                                                    checked={
                                                        externalLink.showOnActionPage
                                                    }
                                                />
                                                <label htmlFor="showOnActionPage">
                                                    Toon op actie pagina
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex justify-between gap-4 px-6">
                            <Button
                                variant="primary"
                                onClick={deleteHandler}
                                className="bg-red-400 hover:bg-red-700"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                                Verwijderen
                            </Button>
                            <div className="flex gap-4">
                                <Button
                                    variant="secondary"
                                    onClick={closeHandler}
                                >
                                    Sluiten
                                </Button>
                                <Button
                                    variant="primary"
                                    onClick={closeHandler}
                                >
                                    Opslaan
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popup
