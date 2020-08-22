import React from 'react'
import { Link } from 'react-router-dom'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import pageNotFound from '../assets/svg/page_not_found.svg'


const NotFound = () => {
    return (
        <div className="container flex flex-col justify-center items-center mx-auto px-6 py-10 " style={{ height: "calc(100vh - 5rem)" }}>
            <div>
                <h1 className="h1 uppercase mb-6 text-2xl lg:text-3xl text-gray-700 text-center">Ups.. Halaman yang kamu cari tidak ditemukan!</h1>
            </div>
            <div className="h-64 ">
                <img src={pageNotFound} className="object-fit h-full" alt="" />
            </div>
            <Link to="/">
                <button className="btn py-3 mt-10 px-6 text-xs m-6 bg-transparent text-gray-700 border border-gray-700"><ArrowBackIcon fontSize="small" /> BACK</button>
            </Link>
        </div>
    )
}

export default NotFound
