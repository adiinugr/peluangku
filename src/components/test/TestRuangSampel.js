import React, { useState } from 'react'
import TestComp from './TestComp'
import Question from '../../assets/svg/questions.svg'
import { useForm } from 'react-hook-form'

const TestRuangSampel = () => {

    const [sampel, setSampel] = useState(null)
    const [anggotaRuangSampel, setAnggotaRuangSampel] = useState(null)

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        setSampel(data.sampel)
        setAnggotaRuangSampel(data.anggotaRuangSampel)
    }

    let alertJawaban

    if (errors.sampel || errors.alertAnggotaRuangSampel) {
        alertJawaban = (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4" role="alert">
                <span className="block sm:inline">Harus diisi semua ya!</span>
            </div>
        )
    } else if (sampel === "benar" && anggotaRuangSampel === "12") {
        alertJawaban = (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mb-4" role="alert">
                <span className="block sm:inline">Good! Jawabanmu sudah tepat.</span>
            </div>
        )
    } else if ((sampel !== "benar" || anggotaRuangSampel !== "12") && sampel !== null && anggotaRuangSampel !== null) {
        alertJawaban = (
            <div className="bg-orange-100 border border-orange-400 text-orange-700 px-4 py-2 rounded relative mb-4" role="alert">
                <span className="block sm:inline">Oops! Jawabanmu belum tepat.</span>
            </div>
        )
    }

    return (
        <TestComp
            image={Question}
            title="Mau lanjut? Jawab ini dulu!"
            content={
                <div className="w-full p-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {alertJawaban}
                        <div className=" font-medium text-gray-800 mb-2">
                            Manakah yang merupakan ruang sampel pelemparan tiga buah koin secara bersamaan?
                        </div>
                        <div className="text-gray-800">
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="sampel" value="salah2" ref={register({ required: true })} />
                                <span className="ml-2">&#123;AAG, AGA, AGG, GAA, GAG, GGA&#125;</span>
                            </label>
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="sampel" value="salah1" ref={register({ required: true })} />
                                <span className="ml-2">&#123;AAA, AAG, AGG, GGG&#125;</span>
                            </label>
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="sampel" value="benar" ref={register({ required: true })} />
                                <span className="ml-2">&#123;AAA, AAG, AGA, AGG, GAA, GAG, GGA, GGG&#125;</span>
                            </label>
                        </div>
                        <div className=" font-medium text-gray-800 mt-4 mb-2">
                            Berapakah banyak anggota ruang sampel dari pelemparan satu koin dan satu dadu?
                        </div>
                        <div className="flex flex-wrap mb-4">
                            <input
                                type="text"
                                className="form-input myInput focus:shadow-outline"
                                name="anggotaRuangSampel"
                                ref={register({ required: true })}
                                placeholder="Isi dengan bilangan"
                            />
                        </div>
                        <div className="text-right">
                            <button type="submit" className="btn font-medium px-3 py-2 border shadow-none capitalize border-myColor-second bg-teal-100 text-myColor-second rounded-md text-sm">Cek Jawaban</button>
                        </div>
                    </form>
                </div>
            }
            prevLink="/materi/ruang-sampel"
            nextLink="/materi/kejadian"
            jawaban={sampel === "benar" && anggotaRuangSampel === "12"}
        />
    )
}

export default TestRuangSampel
