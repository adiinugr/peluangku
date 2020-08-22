import React, { useState } from 'react'
import TestComp from './TestComp'
import Question from '../../assets/svg/questions.svg'
import { useForm } from 'react-hook-form'

const TestArtiPeluang = () => {

    const [jawaban, setJawaban] = useState('')

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        setJawaban(data.sejarahTest)
    }

    let alertMessage

    if (errors.sejarahTest) {
        alertMessage = (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4" role="alert">
                <span className="block sm:inline">Harus dipilih salah satu!</span>
            </div>
        )
    } else if (jawaban === "koin") {
        alertMessage = (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mb-4" role="alert">
                <span className="block sm:inline">Good! Jawabanmu sudah tepat.</span>
            </div>
        )
    } else if (jawaban === "bulan" || jawaban === "presiden") {
        alertMessage = (
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
                        {alertMessage}
                        <div className=" font-medium text-gray-800 mb-4">
                            Berikut manakah ini kejadian yang mempunyai peluang 1?
                        </div>
                        <div className="text-gray-800">
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="sejarahTest" value="presiden" ref={register({ required: true })} />
                                <span className="ml-2">Negara Indonesia mempunyai dua presiden</span>
                            </label>
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="sejarahTest" value="koin" ref={register({ required: true })} />
                                <span className="ml-2">Muncul mata koin angka atau gambar saat dilempar satu kali</span>
                            </label>
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="sejarahTest" value="bulan" ref={register({ required: true })} />
                                <span className="ml-2">Bulan sabit terlihat di malam hari</span>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="btn font-medium px-3 py-2 bg-transparent border shadow-none capitalize border-myColor-second text-myColor-second">Cek Jawaban</button>
                        </div>
                    </form>
                </div>
            }
            prevLink="/materi/arti-peluang"
            nextLink="/materi/ruang-sampel"
            jawaban={jawaban === "koin"}
        />
    )
}

export default TestArtiPeluang
