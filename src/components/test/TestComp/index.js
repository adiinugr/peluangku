import React from 'react'

import { Link } from 'react-router-dom'

const TestComp = (props) => {
    return (
        <div className="w-full rounded p-4 shadow-md">
            <div className="bg-myColor-second text-gray-100 font-medium p-3 mb-6 rounded-md" >
                {props.title}
            </div>
            <div className="flex flex-col items-center md:items-start md:flex-row">
                <div className="w-1/2 md:w-1/3">
                    <img src={props.image} alt="" />
                </div>
                <div className="w-full md:w-2/3">
                    {props.content}
                </div>
            </div>

            <div className="flex mt-6 justify-center">
                <div>
                    <Link to={props.prevLink}>
                        <button className="btn-prev-next rounded-l">
                            Prev
                    </button>
                    </Link>
                </div>
                <div>
                    {props.jawaban &&
                        <Link to={props.nextLink}>
                            <button className="btn-prev-next rounded-r">
                                Next
                    </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default TestComp
