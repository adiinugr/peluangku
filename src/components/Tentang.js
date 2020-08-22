import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import Celebration from '../assets/svg/celebration.svg'
import { Link } from 'react-router-dom'

const Tentang = () => {

    return (

        <div className="py-4 lg:py-8 lg:px-56 bg-gray-100" style={{ height: "calc(100vh - 5rem)" }}>
            <div className="container mx-auto">
                <div className="bg-white">
                    <div className="w-full rounded p-6 shadow-md">
                        <div className="bg-myColor-second text-gray-100 font-medium p-3 mb-6 rounded-md" >
                            Tentang Website Ini
                        </div>
                        <div className="flex flex-col items-center md:items-start md:flex-row">
                            <div className="w-1/2 md:w-1/3">
                                <img src={Celebration} alt="" />
                            </div>
                            <div className="w-full md:w-2/3 mt-6 lg:mt-0 lg:ml-4">
                                <p className="mb-2">
                                    Website ini merupakan sarana untuk belajar materi matematika bab <strong>Peluang</strong>. Di dalamnya terdapat pembahasan materi serta quiz untuk mengasah kemampuan menyelesaikan soal atau masalah.
                                </p>
                                <p className="mb-2">
                                    Dengan adanya website ini diharapkan siswa mendapat kemudahan selama <em>belajar dari rumah</em>. Bagi guru, <strong>Peluang Ku</strong> ini bisa pula menjadi opsi media pembelajaran selama daring dilaksanakan.
                                </p>
                                <p className="mb-6">
                                    Besar harapan saya web ini bisa digunakan oleh banyak pihak. Tentunya di dalamnya masih banyak kekurangan. Oleh sebab itu, masukan dan saran tentunya sangat saya harapkan.
                                </p>
                                <p className="text-right"><em>~ Adi Nugroho</em></p>
                            </div>
                        </div>
                        <div className="flex mt-2 justify-center">
                            <Link to="/">
                                <button className="btn py-3 px-6 text-xs m-6 bg-transparent text-myColor-second border border-myColor-second"><ArrowBackIcon fontSize="small" /> BACK</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Tentang
