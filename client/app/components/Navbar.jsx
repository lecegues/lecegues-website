'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon, XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }

]


const Navbar = () =>{
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"} className="text-2xl md:text-5xl text-black font-semibold">LOGO</Link>
                <div className="mobile-menu block md:hidden">

                    {/* When navbar is closed */}
                    {!navbarOpen ? (
                        <button onClick={ () => setNavbarOpen(true) } className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-gray-200 hover:border-gray-200">
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    
                    /* When navbar is open */
                    ) : (
                        <button onClick={ () => setNavbarOpen(false) } className="flex items-center px-3 py-2 border rounded border-black text-black hover:text-gray-200 hover:border-gray-200">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )}

                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>

    )

}

export default Navbar