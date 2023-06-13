'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    function handleNav() {
        setNav(!nav);
    };

    useEffect (()=> {
        const changeColor = () => {
            if (window.scrollY >= 870) {
                setColor('#fff');
                setTextColor('#000');
            } else {
                setColor('transparent');
                setTextColor('#fff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div style={{backgroundColor: `${color}`}} className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-palet-two-qua">
                <Link href='/'>
                    <h1 style={{color: `${textColor}`}} className="font-bold text-4xl">Rodrigo's Portfolio</h1>
                </Link>
                <ul style={{color: `${textColor}`}} className="hidden sm:flex">
                    <li className="p-4">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/#projects'>Projects</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/about'>About Me</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/about/#work'>Previous Experience</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>

                {/* MobileButton */}

                <div onClick={handleNav} className="block sm:hidden z-10">
                    {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
                </div>
                {/* MobileButton */}
                <div className={
                    nav 
                    ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-palet-two-pri text-center ease-in duration-300"
                    : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-palet-two-pri text-center ease-in duration-300"
                }>
                    <ul>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-palet-two-qui">
                            <Link href='/'>Home</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-palet-two-qui">
                            <Link href='/#projects'>Projects</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-palet-two-qui">
                            <Link href='/about'>About Me</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-palet-two-qui">
                            <Link href='/about/#work'>Works</Link>
                        </li>
                        <li onClick={handleNav} className="p-4 text-4xl hover:text-palet-two-qui">
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar