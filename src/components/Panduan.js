import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import Faq from '../assets/svg/faq.svg'
import { Link } from 'react-router-dom'

const Panduan = () => {
    return (
        <div className="py-4 lg:py-8 lg:px-56 bg-gray-100" style={{ height: "calc(100vh - 5rem)" }}>
            <div className="container mx-auto">
                <div className="bg-white">
                    <div className="w-full rounded p-6 shadow-md">
                        <div className="bg-myColor-second text-gray-100 font-medium p-3 mb-6 rounded-md" >
                            Panduan Penggunaan Website Ini
                        </div>
                        <div className="flex flex-col items-center md:items-start md:flex-row">
                            <div className="w-1/2 md:w-1/3">
                                <img src={Faq} alt="" />
                            </div>
                            <div className="w-full md:w-2/3 mt-6 lg:mt-0 lg:ml-4">
                                <p className="mb-2">
                                    Sebelum mulai belajar di web ini kamu harus memasukkan namamu terlebih dahulu. Kamu boleh isi apa saja. Ini hanya <em>pemanis</em> saja agar lebih asyik.
                                </p>
                                <p className="mb-2">
                                    Secara umum, web ini dibagi menjadi dua bagian yaitu materi dan quiz. Kamu harus mempelajari keseluruhan materi terlebih dahulu agar bisa mengerjakan quiz.
                                </p>
                                <p className="mb-6">
                                    Di sela-sela materi ada <em>mini test</em> yang harus dikerjakan dengan benar. Jika tidak, maka tidak bisa lanjut ke pembahasan selanjutnya. Tenang saja, soal-soalnya tidak sulit kok, menurut saya hahaha.
                                </p>
                                <p className="mb-6">
                                    Selamat belajar dan tetap semangat!
                                </p>
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

export default Panduan
