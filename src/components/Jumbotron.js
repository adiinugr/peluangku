import React from 'react'
import '../styles/tailwind.css'
import { Link } from 'react-router-dom'

import medicine from '../assets/img/medicine.svg'

function Jumbotron() {
    return (
        <div className="container mx-auto px-6 py-10 h-full">
            <div className="flex flex-wrap items-center justify-between h-full">
                <div className="w-full md:w-1/2 pb-12">
                    <h4 className="h1 text-gray-800">
                        Apasih peluang di Matematika?
                        </h4>
                    <p className="text-gray-800">
                        Sebagai siswa SMA tentunya kamu tentu sudah tahu kan ada materi di Matematika yang namanya <strong>Peluang</strong>. Nah, kali ini kita akan belajar tentang itu. Nantinya akan ada materi yang disajikan secara <em>apik</em> dan tentunya ada Mini Quiz untuk mengasah kemampuanmu.
                        <br />
                        <br />
                        Jika kamu sudah siap, langsung saja klik tombol di bawah ini! Selamat belajar!
                    </p>
                    <Link to="/menu-belajar">
                        <button className="btn py-3 px-6 text-sm">Mulai Belajar</button>
                    </Link>
                </div>
                <div className="w-full md:w-2/5">
                    <img src={medicine} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
