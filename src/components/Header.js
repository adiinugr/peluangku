import React from 'react'
import {
    Link
} from 'react-router-dom'

import CasinoIcon from '@material-ui/icons/Casino';
import MenuIcon from '@material-ui/icons/Menu';

import '../styles/tailwind.css';

function Header() {

    const toggleMenu = () => {
        var element = document.getElementById("myDIV");
        element.classList.toggle("hidden");
    }

    return (
        <div
            className="flex items-center w-full justify-between flex-wrap z-10 bg-myColor-second p-6 fixed"
        >
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <CasinoIcon fontSize="large" />

                <span className="font-semibold text-xl tracking-tight pl-4 text-gray-100">
                    <Link to="/">Peluang Ku</Link>
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    id="drop-button"
                    className="btn-menu"
                    style={{}}
                >
                    <MenuIcon onClick={toggleMenu} />
                </button>
            </div>
            <div
                id="myDIV"
                className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden"
            >
                <div className="text-md lg:flex-grow text-gray-100 ">
                    <Link
                        onClick={toggleMenu}
                        to="/panduan"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                    >
                        Panduan
                    </Link>
                    <Link
                        onClick={toggleMenu}
                        to="/tentang"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                    >
                        Tentang
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
