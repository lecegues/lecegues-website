'use client'

import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

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
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4">
                <Link href={"/"} className="text-2xl md:text-5xl text-black font-semibold">LOGO</Link>
                <div className="menu hidden md:block md:w-auto" id="navbar"></div>
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


        </nav>

    )

}

export default Navbar