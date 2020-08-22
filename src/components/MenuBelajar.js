import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from 'styled-components'

import '../styles/tailwind.css'

import MenuCard from './MenuCard'

import bookLover from '../assets/svg/book_lover.svg'
import toDoList from '../assets/svg/to_do_list.svg'

const Wrapper = styled.section`

    background-color: #f7fafc;
    padding-top: 2rem;
    padding-bottom: 2rem;

    @media (max-width: 600px) {
        height: 100%;
    }

     @media (min-width: 600px) {
        height: 100%;
    }

     @media (min-width: 992px) {
        height: calc(100vh - 5rem);
    }

`

function MenuBelajar() {

    const [nama, setNama] = useState('')
    const [buttonDisable, setButtonDisable] = useState(true)

    useEffect(() => {

        const nama = sessionStorage.getItem("nama")
        const buttonDisable = sessionStorage.getItem("buttonDisable")
        const buttonDisableBoolean = JSON.parse(buttonDisable)

        setNama(nama)
        setButtonDisable(buttonDisableBoolean)

    }, [])

    return (
        <Wrapper>
            <div className="container mx-auto flex flex-wrap pt-4 h-full">
                <h1 className="w-full text-2xl font-bold leading-tight text-center text-gray-800 mb-6 px-4">Hai {nama}, belajar materinya dulu yuk! Setelah itu baru nyoba quiz.</h1>
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
                    disable={buttonDisable}
                />
                <div className="flex justify-center w-full">
                    <Link to="/">
                        <button className="btn py-3 px-6 text-xs m-6 bg-transparent text-myColor-second border border-myColor-second"><ArrowBackIcon fontSize="small" /> BACK</button>
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}

export default MenuBelajar
