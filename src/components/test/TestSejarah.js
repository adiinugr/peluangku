import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import Question from '../../assets/svg/questions.svg'
import TestComp from './TestComp'

const TestSejarah = () => {

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
    } else if (jawaban === "fermat") {
        alertMessage = (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mb-4" role="alert">
                <span className="block sm:inline">Good! Jawabanmu sudah tepat.</span>
            </div>
        )
    } else if (jawaban === "deMere" || jawaban === "euclid") {
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
                            Siapakah teman Pascal yang ia surati ketika menemukan masalah tentang peluang?
                        </div>
                        <div className="text-gray-800">
                            <label className="inline-flex items-center">
                                <input className="form-radio" type="radio" name="sejarahTest" value="fermat" ref={register({ required: true })} />
                                <span className="ml-2">Fermat</span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input className="form-radio" type="radio" name="sejarahTest" value="deMere" ref={register({ required: true })} />
                                <span className="ml-2">de Mere</span>
                            </label>
                            <label className="inline-flex items-center ml-4">
                                <input className="form-radio" type="radio" name="sejarahTest" value="euclid" ref={register({ required: true })} />
                                <span className="ml-2">Euclid</span>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="btn font-medium px-3 py-2 bg-transparent border shadow-none capitalize border-myColor-second text-myColor-second">Cek Jawaban</button>
                        </div>
                    </form>
                </div>

            }
            prevLink="/materi/sejarah"
            nextLink="/materi/arti-peluang"
            jawaban={jawaban === "fermat"}
        />
    )
}

export default TestSejarah
