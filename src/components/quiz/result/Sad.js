import React from 'react'

import FeelingBlue from '../../../assets/svg/feeling_blue.svg'
import Button from './Button'

const Sad = (props) => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row container mx-auto justify-between p-8 bg-gray-100 rounded-md shadow-md">
                <div className="w-full lg:w-2/3 justify-center flex flex-col mb-10">
                    <div className="text-center text-4xl font-semibold mb-2">YAHH!!</div>
                    <div className="text-center text-3xl font-semibold">Kamu hanya benar {props.benar} dari 5 soal.</div>
                </div>
                <div className="h-full w-full lg:w-1/3">
                    <img src={FeelingBlue} alt="" />
                </div>
            </div>
            <Button />
        </div>

    )
}

export default Sad
