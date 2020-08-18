import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../styles/tailwind.css'

import MenuCard from './MenuCard'

import bookLover from '../assets/svg/book_lover.svg'
import toDoList from '../assets/svg/to_do_list.svg'



function MenuBelajar() {
    return (
        <section className="bg-gray-100 border-b py-8 h-full">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h1 className="w-full text-3xl font-bold leading-tight text-center text-gray-800">Pilih mana yang ingin kamu lakukan!</h1>
                <MenuCard
                    title="Yuk Pelajari Materinya!"
                    desc="Kamu bisa pelajari materi tentang peluang terlebih dahulu. Setelah itu baru dilanjutkan dengan uji kemampuan."
                    img={bookLover}
                    btn="Belajar"
                    link="/materi/sejarah"
                />
                <MenuCard
                    title="Aku Udah Jago Nih!"
                    desc="Saatnya menguji kemampuanmu dengan mini quiz yang berisi soal tentang peluang."
                    img={toDoList}
                    btn="Uji Kemampuan"
                    link="/quiz"
                />
                <div className="flex justify-center w-full">
                    <Link to="/">
                        <button className="btn py-3 px-6 text-xs m-6 bg-transparent text-myColor-second border border-myColor-second"><ArrowBackIcon fontSize="small" /> BACK</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MenuBelajar
