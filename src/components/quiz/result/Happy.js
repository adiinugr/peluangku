import React from 'react'

import JoyRide from '../../../assets/svg/joyride.svg'
import Button from './Button'

const Happy = (props) => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row container mx-auto justify-between p-8 bg-gray-100 rounded-md shadow-md">
                <div className="w-full lg:w-2/3 justify-center flex flex-col mb-10">
                    <div className="text-center text-4xl font-semibold mb-2">YEAY!!</div>
                    <div className="text-center text-3xl font-semibold">Kamu benar {props.benar} dari 5 soal.</div>
                </div>
                <div className="w-full lg:w-1/3">
                    <img src={JoyRide} alt="" />
                </div>
            </div>
            <Button />
        </div>

    )
}

export default Happy
