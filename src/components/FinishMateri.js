import React from 'react'

import Celebration from '../assets/svg/celebration.svg'
import { useHistory } from 'react-router-dom'

const nama = sessionStorage.getItem("nama")


const FinishMateri = () => {
    const history = useHistory()

    const onClickButton = () => {
        sessionStorage.removeItem("buttonDisable")
        sessionStorage.setItem("buttonDisable", false)
        history.push('/menu-belajar')
    }

    return (
        <section className="bg-gray-200 flex items-center justify-center" style={{ height: "calc(100vh - 5rem)" }}>
            <div className="container flex flex-col items-center lg:flex-row p-6 bg-white lg:w-4/6 rounded-lg shadow-lg">
                <div className="w-1/2 lg:w-1/3 mb-6 lg:mb-0">
                    <img src={Celebration} alt="" />
                </div>
                <div className="lg:w-2/3 my-auto mx-auto">
                    <div>
                        <h1 className="font-medium text-lg text-center text-gray-800 mb-6">Good Job {nama}! Sekarang kamu bisa mencoba quiz untuk mengukur kemampuanmu.</h1>
                    </div>

                    <div className="flex justify-center ">
                        <button onClick={onClickButton} className="btn py-3 px-6 text-xs m-6 ">LANJUT</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinishMateri
