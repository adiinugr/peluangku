import React from 'react'
import {
    Link
} from 'react-router-dom'
import '../styles/tailwind.css';

function Header() {
    return (
        <div
            className="flex items-center w-full h-20 justify-between flex-wrap bg-myColor-second p-6 fixed"
        >
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img width="54" src="/img/lime-white.svg" alt="" />

                <span className="font-semibold text-xl tracking-tight pl-4 text-gray-100">
                    <Link to="/">Peluang Ku</Link>
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    id="drop-button"
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                id="dropdown"
                className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden"
            >
                <div className="text-md lg:flex-grow text-gray-100">
                    <Link
                        to="/panduan"
                        className="block mt-4 lg:inline-block lg:mt-0 mr-4"
                    >
                        Panduan
                    </Link>
                    <Link
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
