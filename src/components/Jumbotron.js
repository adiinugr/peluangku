import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

import { useForm } from 'react-hook-form'

import '../styles/tailwind.css'
import roadSign from '../assets/svg/road_sign.svg'
import { useHistory, Link } from 'react-router-dom'

function Jumbotron() {
    const history = useHistory()

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        sessionStorage.setItem("nama", data.nama)
        sessionStorage.setItem("buttonDisable", true)
        history.push("/menu-belajar")
    }

    const [nama, setNama] = useState('')

    useEffect(() => {
        const nama = sessionStorage.getItem("nama")
        setNama(nama)
    }, [])

    return (
        <div className="flex flex-col ">
            <div className="container mx-auto px-6 py-10" style={{ height: "calc(100vh - 5rem)" }}>
                <div className="flex flex-wrap items-center justify-between h-full">
                    <div className="w-full md:w-1/2 pb-12">
                        <h4 className="h1 text-3xl lg:text-4xl text-gray-800 mb-6">
                            APASIH PELUANG DI MATEMATIKA?
                        </h4>
                        <p className="text-gray-800">
                            Sebagai siswa SMA tentunya kamu tentu sudah tahu kan ada materi di Matematika yang namanya <strong>Peluang</strong>. Nah, kali ini kita akan belajar tentang itu. Nantinya akan ada materi yang disajikan secara <em>apik</em> dan tentunya ada Mini Quiz untuk mengasah kemampuanmu.
                        <br />
                            <br />
                        Jika kamu sudah siap, langsung saja klik tombol di bawah ini! Selamat belajar!
                    </p>
                        {nama ?
                            <Link
                                to="/menu-belajar"
                            >
                                <button className="btn py-3 px-6 text-sm mt-10">Mulai Belajar</button>
                            </Link>
                            :
                            <ScrollLink
                                to="perkenalan"
                                smooth={true}
                                duration={500}
                            >
                                <button className="btn py-3 px-6 text-sm mt-10">Mulai Belajar</button>
                            </ScrollLink>
                        }

                    </div>
                    <div className="w-full md:w-2/5 hidden md:inline-block">
                        <img src={roadSign} alt="" />
                    </div>
                </div>
            </div>
            {!nama &&
                <div className="w-full flex items-center justify-center text-center py-10 bg-gray-200" style={{ height: "calc(100vh - 5rem)" }}>
                    <div>
                        <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
                            <div className="mb-4" id="perkenalan">
                                <p className="h1 text-xl text-gray-700">Tapi sebelumnya, perkenalkan dulu namamu!</p>
                            </div>
                            <form
                                className="rounded-md"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="flex flex-wrap mb-6">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                    >
                                        Nama
                                </label>
                                    <input
                                        type="text"
                                        className="form-input myInput focus:shadow-outline"
                                        name="nama"
                                        ref={register({ required: true })}
                                        placeholder="John Doe"
                                    />
                                    {errors.nama && <span className="text-red-600 mt-2">Harus diisi ya!</span>}
                                </div>
                                <div>
                                    <button className="btn py-2 px-8 text-sm" type="submit">
                                        Lanjut
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Jumbotron
