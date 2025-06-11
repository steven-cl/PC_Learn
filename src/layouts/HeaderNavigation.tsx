/** *Description: Header navigation component for a React application using Tailwind CSS and Headless UI.
    *This component includes a responsive navigation bar with dropdown menus for subMenuListItems 
    *and calls to action, as well as links to home and about pages. 
*/
'use client'


import logo from '@assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'

import {
    BookOpenIcon,
    CpuChipIcon,
    CodeBracketIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import { ChevronDownIcon} from '@heroicons/react/20/solid'

//Constants for subMenuListItems and calls to action
const subMenuListItems = [
    { name: 'Hardware', description: 'Aprenderas como funciona un arduino y circuitos en el', to: '/arduinoHardware', icon: CpuChipIcon },
    { name: 'Codificando', description: 'Aprenderas a codificar proyectos en arduino', to: '/arduinoCoding', icon: CodeBracketIcon }
]

const primaryColor = "#000000"


const HeaderNavigation: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gray-100 sticky top-0 z-50 border-b-3 border-gray-500 shadow-sm">
            <nav aria-label="Global" className="mx-auto flex  items-center justify-between p-6 lg:px-8 align-middle">
                <div className="flex lg:flex-1 justify-self-start justify-start items-center">
                    <div className="flex -m-1.5 p-1.5 flex-row justify-start items-center">
                        <Link to='/' className='h-15 w-15'>
                            <img
                                alt=""
                                src={logo}
                                className="flex-1/2 align-middle h-12"
                            />
                        </Link>
                        <Link to='/' className='flex-1/2 navBar px-7'>PC Learn</Link>
                    </div>
                </div>
                <div className="flex lg:hidden bg-transparent">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                        style={{ backgroundColor: primaryColor }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" color="white" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-9 items-center flex-nowrap">
                    <Link to="/" className="text-sm/6 font-semibold navBar whitespace-nowrap">
                        Inicio
                    </Link>
                    <Link to="/pcComponents" className="text-sm/6 font-semibold navBar whitespace-nowrap">
                        Hardware de Computadoras
                    </Link>
                    <Link to="/basicsArchitecture" className="text-sm/6 font-semibold navBar whitespace-nowrap">
                        Arquitectura Basica
                    </Link>
                    {/**Popover */}
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-2 text-sm/6 font-semibold navBar bg-white">
                            Arduino
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-black" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="mr-20 absolute top-full -left-80 z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {subMenuListItems.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link to={item.to} className="block font-semibold text-gray-900"
                                            onClick={() => setOpen(false)}>
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>
                    <Link to="recommendPC" className="text-sm/6 font-semibold navBar pr-5 whitespace-nowrap">
                        Busco computadora
                    </Link>
                </PopoverGroup>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-80 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5"
                        onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src={logo}
                                className="h-15 w-15"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 bg-black"
                            style={{ backgroundColor: primaryColor }}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" color='white'/>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block navBar rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Inicio
                                </Link>
                                <Link
                                    to="/pcComponents"
                                    className="-mx-3 block navBar rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Hardware de computadoras
                                </Link>
                                <Link
                                    to="/basicsArchitecture"
                                    className="-mx-3 block navBar rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Arquitectura Basica
                                </Link>
                                <Link
                                    to="/recommendPc"
                                    className="-mx-3 block navBar rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Busco Computadora
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold navBar bg-white">
                                        Arduino
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {subMenuListItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 no-underline"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default HeaderNavigation
