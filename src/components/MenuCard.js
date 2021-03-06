import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/tailwind.css'

const MenuCard = (props) => {
    return (
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
            <div className="bg-white flex flex-col min-h-full lg:flex-row rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-6 flex">
                    <img src={props.img} alt="" />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="w-full font-bold text-xl text-gray-800 p-6">{props.title}</div>
                        <p className="text-gray-800 text-base px-6 mb-5">{props.desc}</p>
                    </div>
                    <div>
                        <Link to={props.link}>
                            {props.disable ?
                                <button disabled className="btn py-3 px-6 text-xs m-6 bg-gray-600 cursor-not-allowed">{props.btn}</button>
                                :
                                <button className="btn py-3 px-6 text-xs m-6">{props.btn}</button>
                            }
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MenuCard
