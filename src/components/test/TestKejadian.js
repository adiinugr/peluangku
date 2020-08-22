import React, { useState } from 'react'
import TestComp from './TestComp'
import Question from '../../assets/svg/questions.svg'
import { useForm } from 'react-hook-form'

const TestKejadian = () => {

    const [jawaban, setJawaban] = useState('')

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        setJawaban(data.kejadian)
    }

    let alertMessage

    if (errors.kejadian) {
        alertMessage = (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative mb-4" role="alert">
                <span className="block sm:inline">Harus dipilih salah satu!</span>
            </div>
        )
    } else if (jawaban === "benar") {
        alertMessage = (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mb-4" role="alert">
                <span className="block sm:inline">Good! Jawabanmu sudah tepat.</span>
            </div>
        )
    } else if (jawaban === "salah1" || jawaban === "salah2") {
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
                            Dari pelemparan sebuah dadu dan satu koin, manakah yang merupakan kejadian muncul angka pada koin?
                        </div>
                        <div className="text-gray-800">
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="kejadian" value="salah1" ref={register({ required: true })} />
                                <span className="ml-2">&#123;1A, 3A, 5A&#125;</span>
                            </label>
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="kejadian" value="benar" ref={register({ required: true })} />
                                <span className="ml-2">&#123;1A, 2A, 3A, 4A, 5A, 6A&#125;</span>
                            </label>
                            <label className=" items-center block">
                                <input className="form-radio" type="radio" name="kejadian" value="salah2" ref={register({ required: true })} />
                                <span className="ml-2">&#123;1A, 2A, 3A, 4G, 5G, 6G&#125;</span>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="btn font-medium text-sm px-3 py-2 bg-transparent border shadow-none capitalize border-myColor-second text-myColor-second">Cek Jawaban</button>
                        </div>
                    </form>
                </div>
            }
            prevLink="/materi/kejadian"
            nextLink="/materi/peluang"
            jawaban={jawaban === "benar"}
        />
    )
}

export default TestKejadian
